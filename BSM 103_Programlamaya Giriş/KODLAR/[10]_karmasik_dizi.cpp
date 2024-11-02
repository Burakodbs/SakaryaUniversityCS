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
	KarmasikSayi sayilar[5];

	sayilar[0].kartezyenGoster();

	for (int i = 0; i < 5; i++)
		sayilar[i].bilgiGir();


	for (int i = 0; i < 5; i++)
		sayilar[i].kartezyenGoster();

	system("pause");
	return 0;
}



