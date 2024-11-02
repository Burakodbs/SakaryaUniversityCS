//============================================
// BSM 103 - Programlamaya Giriş Dersi
// 2019-2020 Güz Dönemi
//============================================
// Döngü Yapıları - do-while
// Toplam Hesaplama
//============================================

#include <iostream>
#include <locale.h>					// Diller ve karakter setleri kütüphanesi

using namespace std;

int main()
{
	// Sonuç ekranında Türkçe karakterleri kullanabilmek için
	setlocale(LC_ALL, "Turkish");

	int sayac = 0, toplam = 0;		//sayac, döngü kontrol değişkeni

	do
	{
		toplam += sayac;
		sayac++;			//döngü kontrol değişkeni artımı
	} while (sayac <= 10);


	cout << "[1-10] arasındaki sayıların toplamı : " << toplam << endl;


	system("pause");

	return 0;
}


