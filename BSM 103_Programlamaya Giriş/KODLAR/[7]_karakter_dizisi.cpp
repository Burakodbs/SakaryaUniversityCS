//============================================
// BSM 103 - Programlamaya Giriş Dersi
// 2019-2020 Güz Dönemi
//============================================
// Karakter Dizisi
//============================================

#include <iostream> 
#include <locale.h>					// Diller ve karakter setleri kütüphanesi

using namespace std;

int main()
{
	// Sonuç ekranında Türkçe karakterleri kullanabilmek için
	setlocale(LC_ALL, "Turkish");

	const int MAX = 80;
	char str[MAX];

	cout << "Karakter dizisi gir: ";
	cin >> str;

	cout << "Girilen karakter dizisi: " << str << endl;
	
	system("pause");

	return 0;
}

