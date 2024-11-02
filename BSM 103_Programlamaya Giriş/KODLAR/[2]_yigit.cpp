//=========================================
// Adı				: Programlamaya Giriş 
// Yazar			: Gülüzar ÇİT
// Versiyon			: 1.0
// Telif Hakkı		: @Copyright 2018
//=========================================
// Nesnete Dayalı Prg & Kalıtım 
//=========================================

#include <iostream>
#include <locale.h>					// Diller ve karakter setleri kütüphanesi

using namespace std;

#include "gelismisyigit.h"


int main()
{
	// Sonuç ekranında Türkçe karakterleri kullanabilmek için
	setlocale(LC_ALL, "Turkish");

	//Yigit Veri Yapısı
	GelismisYigit veriYapisi;

	//veriYapisi.pop();
	veriYapisi.push(10);
	veriYapisi.push(20);
	veriYapisi.push(30);
	veriYapisi.push(40);
	veriYapisi.push(50);
	
	while (!veriYapisi.bosmu())
		cout << veriYapisi.pop() << endl;

	system("pause");

	return 0;
}



