//=========================================
// BSM 103 - Programlamaya Giriş Dersi
// 2019-2020 Güz Dönemi
//=========================================
// Sınıf ve Nesne 
//=========================================

#include <iostream>
#include <locale.h>					// Diller ve karakter setleri kütüphanesi

#include "KarmasikSayi.h"

using namespace std;

int main()
{
	// Sonuç ekranında Türkçe karakterleri kullanabilmek için
	setlocale(LC_ALL, "Turkish");

	KarmasikSayi sayi1(3, 2);
	KarmasikSayi sayi2(6, 8);
	KarmasikSayi sayi3;

	sayi1.karmasikTopla(sayi2);

	sayi1.kartezyenGoster();
	sayi2.kartezyenGoster();

	sayi3 = sayi3.karmasikTopla(sayi1, sayi2);
	sayi3.kartezyenGoster();


	sayi1.bilgiGir();
	sayi2.bilgiGir();
	sayi1.kartezyenGoster();
	
	

	system("pause");
	return 0;
}



