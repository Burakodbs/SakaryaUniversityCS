//============================================
// BSM 103 - Programlamaya Giriş Dersi
// 2019-2020 Güz Dönemi
//============================================
// Döngü Yapıları - for
// Faktöriyel Hesaplama
//============================================

#include <iostream>
#include <locale.h>					// Diller ve karakter setleri kütüphanesi

using namespace std;

int main()
{
	// Sonuç ekranında Türkçe karakterleri kullanabilmek için
	setlocale(LC_ALL, "Turkish");

	unsigned int sayi;
	unsigned long fakt = 1;

	cout << "Bir sayı girin : "; 
	cin >> sayi; 

	for (int i = 2; i <= sayi; i++)
		fakt *= i; //2, 3, ..., sayi-1, sayi
	
	//for (int i = sayi; i > 0; i--)
	//	fakt *= i; //sayi, sayi-1, ..., 2, 1 

	cout << sayi << "! = " << fakt << endl;

	system("pause");

	return 0;
}


