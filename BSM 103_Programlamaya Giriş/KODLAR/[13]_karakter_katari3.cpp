//============================================
// BSM 103 - Programlamaya Giriş Dersi
// 2019-2020 Güz Dönemi
//============================================
// Karakter Katarı - String
//============================================

#include <iostream> 
#include <string>					
#include <locale.h>					// Diller ve karakter setleri kütüphanesi

using namespace std;

int main()
{
	// Sonuç ekranında Türkçe karakterleri kullanabilmek için
	setlocale(LC_ALL, "Turkish");

	string ad1("Ahmet");

	string ad = "cenk";
	string ad2 = "Mehmet";
	string soyad = "Yalcin";

	//cin >> ad1;						// Boşluktan sonrasını almaz
	//cout << ad1;
	getline(cin, ad2);					// Boşluğu da okur.
	cout << ad2;
	//ad1=ad2;
	ad1.assign(ad2);					// ad1=ad2
	cout << ad1;
	ad1.append(" Mert");				// ad1 sonuna Mert ifadesini ekler
	cout << ad1.compare(ad2);			// ad1 ile ad2 yi karşılaştırır. 
										// Aynı ise 0 değerini döndürür.
	//strcpy(ad1,ad2);
	cout << ad1 << ad2 << endl;
	cout << ad1.substr(5, 4);			// ad
	//cout << endl << ad1.find("me");	// "me" ifadesinin ad1 icerisindeki konumu

	system("pause");

	return 0;
}

