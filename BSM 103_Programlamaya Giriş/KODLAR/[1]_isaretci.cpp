//==========================================
// Adı				: Programlamaya Giriş 
// Yazar			: Gülüzar ÇİT
// Versiyon			: 1.0
// Telif Hakkı		: @Copyright 2018
//=========================================
// İşaretçiler 
//=========================================

#include <iostream>
#include <locale.h>					// Diller ve karakter setleri kütüphanesi

using namespace std;

int main()
{
	// Sonuç ekranında Türkçe karakterleri kullanabilmek için
	setlocale(LC_ALL, "Turkish");

	int x;
	int *xptr;

	x = 3;
	xptr = &x;

	cout << "x'in adresi        : " << &x << endl;
	cout << "xptr'in icerigi    : " << xptr << endl;
	cout << "x'in degeri        : " << x << endl;
	cout << "*xptr'nin degeri   : " << *xptr << endl;

	cout << "\n\n* ve & operatorleri birbirinin tümleyenidir \n";
	cout << "&*xptr: " << &*xptr << endl;
	cout << "*&xptr: " << *&xptr << endl;

	system("pause");
	return 0;
}
