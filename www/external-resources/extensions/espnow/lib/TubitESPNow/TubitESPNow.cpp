#include "TubitESPNow.h"

/* Initialize static callback pointers */
recv_callback_t TubitESPNow::user_recv_cb = nullptr;
send_callback_t TubitESPNow::user_send_cb = nullptr;
String TubitESPNow::recv_data_buffer = String();

bool TubitESPNow::init() {
	// ESP-NOW requires WiFi STA mode
	WiFi.mode(WIFI_STA);

	// Initialize ESP-NOW and check result
	if (esp_now_init() != ESP_OK) {
		// Serial.println("Error initializing ESP-NOW");
		return false;
	}

	// Register callback functions
	esp_now_register_send_cb(send_cb);
	esp_now_register_recv_cb(recv_cb);

	return true;
}

void TubitESPNow::add_peer(const String &peer_addr, uint8_t channel) {
	str_to_mac(peer_addr);
	// check if peer already in the list
	for (int i = 0; i < ESPNOW_MAX_PEER; i++) {
		if (memcmp(peer_list[i].peer_addr, mac_addr_buffer, 6) == 0) {
			// Serial.println("[tubit-esp-now] Peer already registered");
			return;
		}
	}
	// see if this list is full
	if (peer_list_index < ESPNOW_MAX_PEER) {
		// declare new peer_info and zero it
		esp_now_peer_info_t peer_info = {};
		memcpy(peer_info.peer_addr, mac_addr_buffer, 6);
		// peer settings
		peer_info.channel = channel;
		peer_info.encrypt = 0;
		// add peer
		esp_now_add_peer(&peer_info);
		// add peer to list for "broadcast"
		memcpy(&peer_list[peer_list_index], &peer_info, sizeof(peer_info));
		peer_list_index++;
	}
}

void TubitESPNow::send(const String &peer_addr, const char *message) {
	str_to_mac(peer_addr);
	// declare an empty packet
	packet_t packet = {};
	// packing
	memcpy(packet.peer_addr, mac_addr_buffer, 6);
	strncpy(packet.message, message, sizeof(packet.message));
	packet.message[sizeof(packet.message) - 1] = '\0';
	// sending
	esp_err_t result = esp_now_send(mac_addr_buffer, (uint8_t *)&packet, sizeof(packet));
	if (result == ESP_OK) {
		// Serial.println("[tubit-esp-now] Packet sent successfully");
	} else {
		// Serial.println("[tubit-esp-now] Error sending packet");
	}
}

void TubitESPNow::broadcast(const char *message) {
	for (int i = 0; i < peer_list_index; i++) {
		send(mac_to_str(peer_list[i].peer_addr), message);
	}
}

void TubitESPNow::deinit() {
	esp_now_deinit();
}

/* Convert input MAC string to uint8_t[6], stores result in mac_addr_buffer */
void TubitESPNow::str_to_mac(const String &input_mac) {
	// Check input MAC length
	if (input_mac.length() != 17) {
		memset(mac_addr_buffer, 0, 6);
		return;
	}
	int values[6];
	int parsed = sscanf(input_mac.c_str(), "%x:%x:%x:%x:%x:%x", &values[0], &values[1], &values[2], &values[3], &values[4], &values[5]);
	// Check MAC format
	if (parsed != 6) {
		memset(mac_addr_buffer, 0, 6);
		return;
	}
	for (int i = 0; i < 6; ++i) {
		mac_addr_buffer[i] = (uint8_t)values[i];
	}
}

/* Convert uint8_t[6] MAC address to string */
String TubitESPNow::mac_to_str(const uint8_t *mac) {
	char buf[18];
	sprintf(buf, "%02X:%02X:%02X:%02X:%02X:%02X", mac[0], mac[1], mac[2], mac[3], mac[4], mac[5]);
	return String(buf);
}

String TubitESPNow::device_mac_addr(){
	return WiFi.macAddress();
}

String TubitESPNow::get_recv_data(){
	return recv_data_buffer;
}

/* Internal send callback (calls user-defined if attached) */
void TubitESPNow::send_cb(const uint8_t *mac_addr, esp_now_send_status_t status) {
	if (user_send_cb) {
		user_send_cb(mac_addr, status);
	}
}

/* Internal receive callback (calls user-defined if attached) */
void TubitESPNow::recv_cb(const uint8_t* mac_addr, const uint8_t* data, int len) {

	if (len >= sizeof(packet_t)) {
        packet_t *packet = (packet_t *)data;
        recv_data_buffer = String(packet->message);
    } else {
        recv_data_buffer = "";
		// Serial.println("[tubit-esp-now] Error invalid packet");
    }

    if (user_recv_cb) {
        user_recv_cb(mac_addr, data, len);
    }
}


/* Public API to attach user callbacks */
void TubitESPNow::user_recv_cb_attach(recv_callback_t cb) {
	user_recv_cb = cb;
}

void TubitESPNow::user_send_cb_attach(send_callback_t cb) {
	user_send_cb = cb;
}
