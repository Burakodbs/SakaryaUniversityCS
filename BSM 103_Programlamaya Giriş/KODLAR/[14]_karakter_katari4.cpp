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

	string str1 = "";

	const int MAX = 80;
	char str2[MAX];
	cin >> str1;
	cout << str1.length() << " karakter" << endl;
	int j;

	for (j = 0; j < str1.length(); j++)
		str2[j] = toupper(str1[j]);
	str2[j] = NULL;

	cout << str2 << endl;
	
	system("pause");

	return 0;
}

