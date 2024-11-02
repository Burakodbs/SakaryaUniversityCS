//============================================
// BSM 103 - Programlamaya Giriş Dersi
// 2019-2020 Güz Dönemi
//============================================
// Döngü Yapıları - for
// Toplam Hesaplama
//============================================

#include <iostream>
#include <locale.h>					// Diller ve karakter setleri kütüphanesi

using namespace std;

int main()
{
	// Sonuç ekranında Türkçe karakterleri kullanabilmek için
	setlocale(LC_ALL, "Turkish");

	int toplam=0;
   
	for(int sayac=1;sayac<=10;sayac++)
		toplam += sayac;
	
	// Örneğin iki sayı arasındaki sayıların toplamını bulmak üzere güncellenmiş hali
	/*
	int altSinir	= 10;
	int ustSinir	= 20;

	for (int sayac = altSinir; altSinir <= ustSinir; altSinir++)
		toplam += sayac;
	*/
   cout<<"Toplam = " << toplam <<endl;

	system("pause");

	return 0;
}


