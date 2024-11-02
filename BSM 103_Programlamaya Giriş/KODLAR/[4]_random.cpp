//============================================
// BSM 103 - Programlamaya Giriş Dersi
// 2019-2020 Güz Dönemi
//============================================
// Rasgele Sayı Üretimi
//============================================

#include <iostream> 
#include <iomanip> 
#include <stdlib.h>
#include <ctime>					// time() fonksiyonu için
#include <locale.h>					// Diller ve karakter setleri kütüphanesi
//#define ESAY 10

using namespace std;

const int ESAY = 10;

int main()
{
	// Sonuç ekranında Türkçe karakterleri kullanabilmek için
	setlocale(LC_ALL, "Turkish");

	// maksimum rand sayı üretme aralığı [0-32767]
	//cout << RAND_MAX << endl;

	int sayilar[ESAY];
	 
	cout << setw(5) << "İNDİS" 
		 << setw(10) << "DEĞER" << endl;

	// Her çalıştırılmasında farklı random sayılar üretilmesi için
	//srand(time(NULL));
	for (int i = 0; i < ESAY; i++)
	{
		// [0-99] aralığında random sayı üretir
		sayilar[i] = rand() % 100;
		cout << setw(3) << i << setw(10) <<sayilar[i] << endl;
	}

	system("pause");

	return 0;
}

