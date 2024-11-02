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
	
	int sayi;
	bool asal;				// sayının asal olup olmadığını kontrol eden değişken
	
	cout << "Bir sayı girin:";
	cin >> sayi;

	// sayının başlangıçta asal olduğu varsayılır
	asal = 1;
	for (int i = 2; i < sayi; i++)
	{
		// sayının asal olup olmadığını kontrol etme
		if (sayi % i == 0)
		{
			// sayı asal değilse asal değişkeninin değeri 0 olur
			// ve içteki döngüden çıkılır
			asal = 0;
			break;
		}
	}
		
	// sayı asal, yani asal değişkeninin değeri true(1) ise
	if (asal)
		cout << sayi << " asaldır..." << endl;
	else
		cout << sayi << " asal değildir..." << endl;

	system("pause");

	return 0;
}


