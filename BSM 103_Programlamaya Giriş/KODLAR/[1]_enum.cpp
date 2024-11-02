//============================================
// BSM 103 - Programlamaya Giriş Dersi
// 2019-2020 Güz Dönemi
//============================================
// Veri Tipi Tanımlama - enum
//============================================

#include <iostream>
#include <locale.h>					// Diller ve karakter setleri kütüphanesi

using namespace std;

enum bolumler { bilgisayar, bilisim, yazilim } bolum;

int main()
{
	// Sonuç ekranında Türkçe karakterleri kullanabilmek için
	setlocale(LC_ALL, "Turkish");

	bolum = bilgisayar;
	cout << bolum;

	bolum = static_cast<bolumler>(bolum + 1);
	cout << bolum;

	system("pause");

	return 0;
}

