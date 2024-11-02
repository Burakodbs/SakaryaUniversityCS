//============================================
// BSM 103 - Programlamaya Giriş Dersi
// 2019-2020 Güz Dönemi
//============================================
// ----- Asal Sayı Bulma ------
// [1-100] arasındaki asal sayıları 
// bulup ekrana yazdıran program
//============================================

#include <iostream>
#include <locale.h>					// Diller ve karakter setleri kütüphanesi 

using namespace std;


int main()
{
	// Sonuç ekranında Türkçe karakterleri kullanabilmek için
	setlocale(LC_ALL, "Turkish");
	
	bool asal = 1;				// sayının asal olup olmadığını kontrol eden değişken
	short sayac = 0;			// Bir satırda üç asal sayı olmasını sağlayan kontrol değişkenş

	for (int i = 1; i <= 100; i++)
	{
		// sayının başlangıçta asal olduğu varsayılır
		asal = 1;
		for (int j = 2; j < i; j++)
		{
			// sayının asal olup olmadığını kontrol etme
			if (i%j == 0)
			{
				// sayı asal değilse asal değişkeninin değeri 0 olur
				// ve içteki döngüden çıkılır
				asal = 0;
				break;
			}
		}
		
		// sayı asal, yani asal değişkeninin değeri true(1) ise
		if (asal)
		{
			cout << i << "   ";
			sayac++;
			if (sayac % 3 == 0)
			{
				cout << endl;
			}
		}
	}
	system("pause");

	return 0;
}


