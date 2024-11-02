//============================================
// BSM 103 - Programlamaya Giriş Dersi
// 2019-2020 Güz Dönemi
//============================================
// Dizi Tanımlama
//============================================

#include <iostream>
#include <iomanip>
#include <locale.h>					// Diller ve karakter setleri kütüphanesi
//#define ESAY 10

using namespace std;

const int ESAY = 20;

enum bolumler { bilgisayar, bilisim, yazilim } bolum;

int main()
{
	// Sonuç ekranında Türkçe karakterleri kullanabilmek için
	setlocale(LC_ALL, "Turkish");

	int sayilar[ESAY] = { 19, 3, 15, 7, 11, 9, 13, 5, 17, 1 };

	cout << setw(5) << "indis" << setw(5) << "Deger" << endl;

	for (int i = 0; i < ESAY; i++)
		cout << setw(5) << i << setw(5) << sayilar[i] << endl;


	system("pause");

	return 0;
}

