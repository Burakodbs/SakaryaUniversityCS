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

	int sayi[ESAY];

	for (int i = 0; i < ESAY; i++)
	{
		cin >> sayi[i];//sayi[i]=i+1;
	}
	
	for (int i = 0; i < ESAY; i++)
	{
		cout << left << setw(6) << sayi[i];
		if ((i + 1) % 5 == 0)
			cout << endl;
	}


	system("pause");

	return 0;
}

