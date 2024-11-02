//============================================
// BSM 103 - Programlamaya Giriş Dersi
// 2019-2020 Güz Dönemi
//============================================
// Döngü Yapıları - for
// Tek ve Çift Sayıların Ortalaması
//============================================

#include <iostream>
#include <locale.h>					// Diller ve karakter setleri kütüphanesi

using namespace std;

int main()
{
	// Sonuç ekranında Türkçe karakterleri kullanabilmek için
	setlocale(LC_ALL, "Turkish");

	int tekToplam = 0, ciftToplam = 0;
	int sayacTek = 0, sayacCift = 0;

	for (int i = 1; i <= 1000; i++)
	{
		if (i % 2 == 0)		
		{
			ciftToplam += i;
			sayacCift++;

		}
		else
		{
			tekToplam += i;
			sayacTek++;
		}
	}

	cout << "[0-1000] arasındaki çift sayıların toplamı : " << ciftToplam << endl;
	cout << "[0-1000] arasındaki tek sayıların toplamı  : " << tekToplam << endl << endl;

	cout << "[0-1000] arasındaki çift sayıların ortalaması : " << ciftToplam / sayacCift << endl;
	cout << "[0-1000] arasındaki tek sayıların ortalaması  : " << tekToplam / sayacTek << endl;

	system("pause");

	return 0;
}


