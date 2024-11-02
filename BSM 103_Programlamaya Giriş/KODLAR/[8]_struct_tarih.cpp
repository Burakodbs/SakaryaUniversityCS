//============================================
// BSM 103 - Programlamaya Giriş Dersi
// 2019-2020 Güz Dönemi
//============================================
// Yapı Tanımlama - struct
//============================================

#include <iostream>
#include <locale.h>					// Diller ve karakter setleri kütüphanesi

using namespace std;

struct sure {                   // yapı tanimlama
	int saat;
	int dakika;
};

struct takvim {               // yapi tanimlama
	int yil;
	int ay;
	int gun;
	struct sure tarih;            // icice yapi kullanimi
};


int main()
{
	// Sonuç ekranında Türkçe karakterleri kullanabilmek için
	setlocale(LC_ALL, "Turkish");

	takvim t;

	cout << "yıl ay gün saat dakika";
	cin >> t.yil >> t.ay >> t.gun;
	cin >> t.tarih.saat >> t.tarih.dakika;

	cout << t.gun << t.ay << t.yil << '\t' 
		 << t.tarih.saat << ':' << t.tarih.dakika;

	system("pause");			// bir tuşa basıncaya kadar bekle

	return 0;
}

