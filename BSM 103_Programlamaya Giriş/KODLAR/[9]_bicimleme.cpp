//============================================
// BSM 103 - Programlamaya Giriş Dersi
// 2019-2020 Güz Dönemi
//============================================
// Yapı Tanımlama - struct
//============================================

#include <iostream>
#include <locale.h>					// Diller ve karakter setleri kütüphanesi
#include <iomanip>

using namespace std;


int main()
{
	// Sonuç ekranında Türkçe karakterleri kullanabilmek için
	setlocale(LC_ALL, "Turkish");


	double sayi1, sayi2, sayi3;
	
	sayi1 = 44.426423423;
	sayi2 = 48e-5;
	sayi3 = 566.01;

	cout << setprecision(7) << sayi1 << endl;
	cout << setprecision(5) << sayi1 << endl;
	cout << fixed << setprecision(2) << sayi1 << endl;
	cout << fixed << setprecision(5) << sayi2 << endl;
	cout << scientific << setprecision(3) << sayi3 << endl;
	cout << fixed << setprecision(6) << sayi1 << endl;
	cout << hex << 15 << endl;
	cout << dec << 0xff << endl;
	cout << oct << 8 << endl;

	system("pause");			// bir tuşa basıncaya kadar bekle

	return 0;
}

