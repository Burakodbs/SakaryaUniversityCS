//============================================
// BSM 103 - Programlamaya Giriş Dersi
// 2019-2020 Güz Dönemi
//============================================
// Döngü Yapıları - while
// Üs/Kuvvet Hesaplama
//============================================

#include <iostream>
#include <locale.h>					// Diller ve karakter setleri kütüphanesi

using namespace std;

int main()
{
	// Sonuç ekranında Türkçe karakterleri kullanabilmek için
	setlocale(LC_ALL, "Turkish");

	int kuvvet = 1;							// dördüncü kuvvet değeri başlangıçta 1 atanır
	int sayi = 1;               			// dördüncü kuvvet değeri 10000'den küçük olan sayıları tutar

	while (kuvvet < 10000)            		// sayının dördüncü kuvveti 10000'den küçük olduğu sürece devam eder
	{
		cout << setw(2) << sayi;
		cout << setw(5) << kuvvet << endl;  // sayının dördüncü kuvvetini yaz
		++sayi;                          	// sonraki kuvvet değeri için sayıyı 1 arttır
		kuvvet = sayi * sayi*sayi*sayi;     // sayının dördüncü kuvvetini hesapla
	}

	cout << endl;

	system("pause");

	return 0;
}


