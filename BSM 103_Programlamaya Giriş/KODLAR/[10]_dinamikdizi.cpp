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

struct Ogrenci
{
	char numara[10];
	char ad[10];
	char  soyad[10];
	float genelOrtalama;
};

int main()
{
	int n;		cin >> n;

	int *ptrInt = new int[n];		// heap bölgesinde n kadar tamsayılık yer açıldı

	cout << ptrInt << endl;			// heap bölgesinde açılan n kadar tamsayılık 
									// yerin başlangıç adresi

	ptrInt[0] = 10;
	cout << *(ptrInt + 0);			// 10 değerini yazar...

	char *mesaj = new char[10];

	cout << mesaj << endl;			// mesaj için ayrılan yerin başlangıç adresini 
									// yazdırmasını bekleriz ama karakter katarı gösteren  
									// bir işaretçi değişkeni olduğundan karakter katarı yazdırılır.
	int *ptr2 = (int*)mesaj; 
	cout << ptr2 << endl;			// mesaj için ayrılan yerin başlangıç adresi yazdırılır

	delete[] ptrInt;
	delete[] mesaj;

	ptrInt = NULL;
	mesaj = NULL;

	system("pause");
	return 0;
}
 