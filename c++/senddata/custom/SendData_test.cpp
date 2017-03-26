#include <lsl_cpp.h>
#include <iostream>
#include <iomanip>
#include <string>
#include <sstream>
#include <time.h>
#include <stdlib.h>
#include <chrono>
#include <thread>
#include <memory>
#include <ctime>
#include <mutex>
std::string get_time(){
	char buff[170];
	auto t = std::time(nullptr);
	auto tm = *std::localtime(&t);
	std::ostringstream oss;
	strftime(buff, sizeof buff, "%A %c", &tm) ;
	puts(buff);
	std::string str(buff);
	return str;
}
using namespace std;
int main(int argc, char* argv[]) {
	string name, type;
	unsigned num_channels=135;
	double sample_rate=lsl::IRREGULAR_RATE;
	try {
		name="biosemi";
		type="eeg";
		lsl::stream_info info(name,type,num_channels,lsl::IRREGULAR_RATE,lsl::cf_string);
		// add some description fields
		info.desc().append_child_value("purpose", "realtime asset stream");
		lsl::stream_outlet outlet(info);
		// send data forever
		cout << "Now sending data... " << endl;
		std::stringstream ss("", ios_base::ate | ios_base::in | ios_base::out);
		//std::vector<lsl::cf_string>data_sample(num_channels,"init");
		std::vector<std::string> data_sample(num_channels);
		std::string s;//=ss.str();
		for(long t=0;;t++) {
			ss.str("");
			ss << t;
			data_sample[0]=ss.str();
			data_sample[1]="GOOD";
			data_sample[2]=get_time();
			outlet.push_sample(data_sample);
		}
	} catch(std::exception &e) {
		cerr << "Got an exception: " << e.what() << endl;
	}
	cout << "Press any key to exit. " << endl; cin.get();
	return 0;
}
