//============================================
// BSM 103 - Programlamaya Giriş Dersi
// 2019-2020 Güz Dönemi
//============================================
// Veri Tipi Tanımlama - enum
//============================================

#include <iostream>
#include <locale.h>					// Diller ve karakter setleri kütüphanesi

using namespace std;

enum yonler { Guney, Kuzey, Dogu, Bati };
//Farklı enum örnekleri
//enum yonler { Guney = 0, Kuzey = 20, Dogu = 5, Bati = 4 };
//enum yonler { Guney = 1, Kuzey, Dogu, Bati };

int main()
{
	// Sonuç ekranında Türkçe karakterleri kullanabilmek için
	setlocale(LC_ALL, "Turkish");

	enum yonler yon;

	int secim;

	cout << "Yön Giriniz (Güney=0, Kuzey=1, Doğu=2, Batı=3) :";
	cin >> secim;

	yon = static_cast<yonler>(secim);

	switch (yon)
	{
		case Guney: cout << "Guney"; break;
		case Kuzey: cout << "Kuzey"; break;
		case Dogu: cout << "Dogu"; break;
		case Bati: cout << "Bati"; break;
		default: cout << "hatali secim";
	}

	system("pause");

	return 0;
}

