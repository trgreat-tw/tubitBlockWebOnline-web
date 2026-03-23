#include "NNforduino.h"
#include <Arduino.h>

NNforduino::NNforduino(){
}

void NNforduino::OnelayerNN(int actfunc) {
	func0 = actfunc;
	w0 = 1;
	b0 = 1;
}

void NNforduino::InitONN(double data) {
	if (data == RAN) {
		int randNumber;
		randomSeed(analogRead(0));
		randNumber = random(-99, 100);
		w0 = randNumber;
		w0 = w0 / 100;
		randNumber = random(-99, 100);
		b0 = randNumber;
		b0 = b0 / 100;
	}
	else {
		w0 = data;
		b0 = data;
	}
}

double NNforduino::OutONN(double input) {
	double out = 0;
	out = w0*input+b0;
	if (func0 == RELU) {
		if (out < 0) {
			out = 0;
		}
	}
	else if (func0 == CROSSIN) {
		out = out * input;
	}
	return out;
}
	
bool NNforduino::LearnONN(String intraindata, double learn_rate, long learn_time) {
	char traindata[intraindata.length() + 1];
	strcpy(traindata, intraindata.c_str());
	const char *sep = ":"; 
	char *a;
	char *tmparray[10];
	int num_data=0;
	a = strtok(traindata, sep);
	while (a) {
		tmparray[num_data] = a;
		a = strtok(NULL, sep);
		num_data++;
	}
	double **rawdata;
	rawdata = new double *[num_data];
	for (int i = 0; i<num_data; i++) {
		rawdata[i] = new double[2];
	}
	for (int i = 0; i<num_data; i++) {
		const char *sep1 = ",";
		char *b;
		b = strtok(tmparray[i], sep1);
		rawdata[i][0] = atof(b);
		b = strtok(NULL, sep1);
		rawdata[i][1] = atof(b);
	}
	double tmp=0;
	for (int i = 0; i < num_data; i++) {
		for (int k = 0; k < 2; k++) {
			tmp = tmp + rawdata[i][k];
		}
	}

	for (long i = 0; i<learn_time; i++) {
		double f = 0;
		f = OutONN(rawdata[i%num_data][0]);
		if (func0 == RELU || func0 == NONE) {
			w0 = w0 + learn_rate * ((rawdata[i%num_data][1] - f)*rawdata[i%num_data][0]);
			b0 = b0 + learn_rate * ((rawdata[i%num_data][1] - f));
		}
		else if (func0 == CROSSIN) {
			w0 = w0 + learn_rate * ((rawdata[i%num_data][1] - f)*rawdata[i%num_data][0] *rawdata[i%num_data][0]);
			b0 = b0 + learn_rate * ((rawdata[i%num_data][1] - f)*rawdata[i%num_data][0]);
		}
		delay(0);
	}	
	return true;
}

void NNforduino::TwolayerNN(int actfunc0,int actfunc1) {
	func0 = actfunc0;
	func1 = actfunc1;
	w0 = 1;
	w1 = 1;
	b0 = 1;
	b1 = 1;
	n = 0;
}

void NNforduino::InitTNN(double data) {
	if (data == RAN) {
		int randNumber;
		randomSeed(analogRead(0));
		randNumber = random(-99, 100);
		w0 = randNumber;
		w0 = w0 / 100;
		randNumber = random(-99, 100);
		w1 = randNumber;
		w1 = w1 / 100;
		randNumber = random(-99, 100);
		b0 = randNumber;
		b0 = b0 / 100;
		randNumber = random(-99, 100);
		b1 = randNumber;
		b1 = b1 / 100;
	}
	else {
		w0 = data;
		w1 = data;
		b0 = data;
		b1 = data;
	}
}

double NNforduino::OutTNN(double input) {
	double out = 0;
	n = w0 * input + b0;
	if (func0 == RELU) {
		if (n < 0) {
			n = 0;
		}
	}
	else if (func0 == CROSSIN) {
		n = n * input;
	}
	out = w1 * n + b1;
	if (func1 == RELU) {
		if (out < 0) {
			out = 0;
		}
	}
	else if (func1 == CROSSIN) {
		out = out * input;
	}
	return out;
}

bool NNforduino::LearnTNN(String intraindata, double learn_rate, long learn_time) {
	char traindata[intraindata.length() + 1];
	strcpy(traindata, intraindata.c_str());
	const char *sep = ":";
	char *a;
	char *tmparray[10];
	int num_data = 0;
	a = strtok(traindata, sep);
	while (a) {
		tmparray[num_data] = a;
		a = strtok(NULL, sep);
		num_data++;
	}
	double **rawdata;
	rawdata = new double *[num_data];
	for (int i = 0; i<num_data; i++) {
		rawdata[i] = new double[2];
	}
	for (int i = 0; i<num_data; i++) {
		const char *sep1 = ",";
		char *b;
		b = strtok(tmparray[i], sep1);
		rawdata[i][0] = atof(b);
		b = strtok(NULL, sep1);
		rawdata[i][1] = atof(b);
	}
	double tmp = 0;
	for (int i = 0; i < num_data; i++) {
		for (int k = 0; k < 2; k++) {
			tmp = tmp + rawdata[i][k];
		}
	}

	for (long i = 0; i<learn_time; i++) {
		double f = 0;
		f = OutTNN(rawdata[i%num_data][0]);
		if (func0 == RELU || func0 == NONE) {
			w0 = w0 + learn_rate*((rawdata[i%num_data][1] - f)*w1*rawdata[i%num_data][0] );
			b0 = b0 + learn_rate * ((rawdata[i%num_data][1] - f)*w1);
		}
		else if (func0 == CROSSIN) {
			w0 = w0 +learn_rate*((rawdata[i%num_data][1] - f)*w1*rawdata[i%num_data][0] * rawdata[i%num_data][0]);
			b0 = b0 + learn_rate * ((rawdata[i%num_data][1] - f)*w1*rawdata[i%num_data][0]);
		}

		if (func1 == RELU || func1 == NONE) {
			w1 = w1 +learn_rate*((rawdata[i%num_data][1] - f)*n);
			b1 = b1 + learn_rate * (rawdata[i%num_data][1] - f);
		}
		else if (func1 == CROSSIN) {
			w1 = w1 +learn_rate*((rawdata[i%num_data][1] - f)*n* rawdata[i%num_data][0]);
			b1 = b1 + learn_rate * ((rawdata[i%num_data][1] - f)* rawdata[i%num_data][0]);
		}
		delay(0);
	}
	return true;
}

void NNforduino::RNN(double data_alpha) {
	alpha = data_alpha;
}

double NNforduino::OutRNN(double input) {
	double out;
	out = alpha * old_data + (1 - alpha) * input;
	old_data = input;
	return out;
}


