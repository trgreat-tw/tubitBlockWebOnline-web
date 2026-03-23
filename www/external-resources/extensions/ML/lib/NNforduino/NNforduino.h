#ifndef _NNFORDUINO_H_
#define _NNFORDUINO_H_

#include <Arduino.h>


#define RELU 0
#define CROSSIN 1
#define NONE 2
#define RAN 100

class NNforduino {
	private :
		double n;
		int func0;
		int func1;
		double alpha;
		double old_data=0;
	public:
		double w0;
		double w1;
		double b0;
		double b1;
		NNforduino();
		void OnelayerNN(int actfunc);
		void InitONN(double data);
		double OutONN(double input);	
		bool LearnONN(String intraindata, double learn_rate, long learn_time);
		void TwolayerNN(int actfunc0, int actfunc1);
		void InitTNN(double data);
		double OutTNN(double input);
		bool LearnTNN(String intraindata, double learn_rate, long learn_time);
		void RNN(double alpha);
		double OutRNN(double input);
};
#endif
