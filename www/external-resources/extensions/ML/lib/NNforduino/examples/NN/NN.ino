#include "NNforduino.h"

NNforduino NN;
NNforduino NN2;
NNforduino RNN;
void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  delay(3000);
  NN.OnelayerNN(RELU);//Create a Onelayer NN with RELU function
  NN.w0=1;//Set NN by putting 1 to w0 and 2 to b0
  NN.b0=2;
  double var;
  var=NN.OutONN(2);//Output the result of NN by inputting number 2
  Serial.println();
  Serial.print("var=");Serial.println(var);
  String learndata="1,3:2,5";
  if(NN.LearnONN(learndata,0.1,1000)){//Train the Onelayer NN with data:(1,3 and 2,5), rate of learning :0.1 and time of learning:1000
    var=NN.OutONN(2);//Output the result of NN by inputting number 2
  }
  Serial.print("var=");Serial.println(var);

  NN2.TwolayerNN(CROSSIN,RELU);//Create a Tnelayer NN with SQURE function and RELU function
  NN2.InitTNN(RAN);//Initial NN by putting random number to all parameter
  double var2;
  var2=NN2.OutTNN(0.713);//Output the result of NN by inputting number 0.713
  Serial.println();
  Serial.print("var2=");Serial.println(var2);
  if(NN2.LearnTNN("0.645,0.25:0.764,0.45",0.01,100000)){//Train the Onelayer NN with data:(0.645,0.25 and 0.764,0.45), rate of learning :0.01 and time of learning:100000
    var2=NN2.OutTNN(0.713);//if the NN is effective, the output number should be about 0.35 
  }
  Serial.print("var2=");Serial.println(var2);

  RNN.RNN(0.8);//Create a RNN with alpha 0.8
  int var3;
  var3=RNN.OutRNN(100);//Output the result of RNN by inputting number 100
  Serial.print("var3=");Serial.println(var3);
  var3=RNN.OutRNN(100);//Output the result of RNN by inputting number 100
  Serial.print("var3=");Serial.println(var3);
}

void loop() {
  // put your main code here, to run repeatedly:
}
