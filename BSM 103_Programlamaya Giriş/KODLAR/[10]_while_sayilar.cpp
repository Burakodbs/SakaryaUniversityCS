//============================================
// BSM 103 - Programlamaya Giriş Dersi
// 2019-2020 Güz Dönemi
//============================================
// Döngü Yapıları - while
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

	int sayi;

	cout << "Sayi giriniz... :";
	cin >> sayi;

	while (sayi > 0)
	{
		if (sayi % 2 == 0)
		{
			ciftToplam += sayi;
			sayacCift++;
		}
		else
		{
			tekToplam += sayi;
			sayacTek++;
		}

		cout << "Sayi giriniz... :";
		cin >> sayi;
	}

	cout << "Çift sayıların toplamı : " << ciftToplam << endl;
	cout << "Tek sayıların toplamı  : " << tekToplam << endl << endl;

	if (sayacCift>0)
		cout << "Çift sayıların ortalaması : " << ciftToplam / sayacCift << endl;
	
	if (sayacTek > 0)
		cout << "Tek sayıların ortalaması  : " << tekToplam / sayacTek << endl;

	system("pause");

	return 0;
}


