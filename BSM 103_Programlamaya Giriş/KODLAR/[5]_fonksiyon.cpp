//==========================================
// Adı				: Programlamaya Giriş 
// Yazar			: Gülüzar ÇİT
// Versiyon			: 1.0
// Telif Hakkı		: @Copyright 2018
//=========================================
// İşaretçiler 
//=========================================

#include <iostream>
using namespace std;

void centimize(double*);  

const int MAX = 5;


int main()
{
	double varray[MAX] = { 10.0, 43.1, 95.9, 59.7, 87.3 };
	
	//double var=10.0;
	//centimize(&var);

	centimize(varray);
	
	for (int j = 0; j < MAX; j++)
		cout << "vararray[" << j << "]=" << varray[j] << " cm" << endl;

	system("pause");
	return 0;
}

void centimize(double* ptrd)
{
	//*ptrd= *ptrd * 2.54;

	for (int j = 0; j < MAX; j++){
		*ptrd *= 2.54;
		ptrd++;  //ptrd varray dizisi elemanlarına işaret eder
	}
}

