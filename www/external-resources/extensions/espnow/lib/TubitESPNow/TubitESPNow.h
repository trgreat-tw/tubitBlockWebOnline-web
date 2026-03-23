#ifndef TUBIT_ESPNOW_H
#define TUBIT_ESPNOW_H

#include <Arduino.h>
#include <esp_now.h>
#include <WiFi.h>

/* Packet for tubit_esp_now */
typedef struct {
	uint8_t peer_addr[6];
	char message[244];
} packet_t;

/* Callback type definitions */
typedef void (*send_callback_t)(const uint8_t *mac_addr, esp_now_send_status_t status);
typedef void (*recv_callback_t)(const uint8_t *mac_addr, const uint8_t *data, int len);

class TubitESPNow {
public:
	bool init();
	void add_peer(const String &peer_addr, uint8_t channel);
	void send(const String &peer_addr, const char *message);
	void broadcast(const char *message);
	void deinit();

	void user_recv_cb_attach(recv_callback_t cb);
	void user_send_cb_attach(send_callback_t cb);

	String device_mac_addr();
	static String get_recv_data();

private:
	static const int ESPNOW_MAX_PEER = 20;
	esp_now_peer_info_t peer_list[ESPNOW_MAX_PEER];
	int peer_list_index = 0;
	uint8_t mac_addr_buffer[6];
	
	static String recv_data_buffer;
	static recv_callback_t user_recv_cb;
	static send_callback_t user_send_cb;

	static void send_cb(const uint8_t *mac_addr, esp_now_send_status_t status);
	static void recv_cb(const uint8_t *mac_addr, const uint8_t *data, int len);
	void str_to_mac(const String &input_mac);
	String mac_to_str(const uint8_t *mac);
};

#endif // TUBIT_ESPNOW_H