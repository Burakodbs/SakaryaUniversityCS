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
	int sayi = 15;

	int* sayiPtr;
	//cin>>sayi;
	sayiPtr = &sayi;
	*sayiPtr = 20;		//sayi = 20;

	cout << "sayilar:" << sayilar << endl
		<< "sayilar[0] adresi:" << &sayilar[0] << endl
		<< "sayilar isaretci sabitinin boyutu:" << sizeof(sayilar) << endl<<endl;

	cout << "sayi:" << sayi << endl
		<< "adres:" << sayiPtr << endl
		<< "isaretcinin boyutu:" << sizeof(sayiPtr) << endl<< endl;

	int a[5] = { 0,1,2,5,7 };
	
	int *p;
	p = a;

	cout << "*(a + 3)  => " << *(a + 3) << endl;
	cout << "*(p++)    => "<< *(p++) << endl;
	cout << "*(p)      => " << *(p) << endl<<endl;
	//cout<<*(++a);		//hatalı, a işaretçi sabitidir, değeri değiştirilemez

	int intarray[5] = { 31, 54, 77, 52, 93 };

	for (int j = 0; j < 5; j++)
		cout << *(intarray + j) << endl;


	system("pause");
	return 0;
}
