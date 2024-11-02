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

int main()
{
	int sayilar[5];
	int * p;
	p = sayilar;  *p = 10;
	p++;  *p = 20;
	p = &sayilar[2];  *p = 30;
	p = sayilar + 3;  *p = 40;
	p = sayilar;  *(p + 4) = 50;
	for (int n = 0; n < 5; n++)
		cout << sayilar[n] << ", ";

	system("pause");
	return 0;
}
