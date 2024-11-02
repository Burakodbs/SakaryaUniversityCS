//============================================
// BSM 103 - Programlamaya Giriş Dersi
// 2019-2020 Güz Dönemi
//============================================
// Karakter Katarı
//============================================

#include <iostream> 
#include <string>					// strlen() fonksiyonu için
#include <locale.h>					// Diller ve karakter setleri kütüphanesi

using namespace std;

int main()
{
	// Sonuç ekranında Türkçe karakterleri kullanabilmek için
	setlocale(LC_ALL, "Turkish");

	string ad1;

	getline(cin, ad1);  //Boşluğu da okur...
	cout << ad1.length();
	
	//Klavyeden girilen karakter dizisini tersten yazdırır
	for (int i = ad1.length() - 1; i >= 0; i--)
		cout << ad1[i];

	system("pause");

	return 0;
}

