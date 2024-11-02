//============================================
// BSM 103 - Programlamaya Giriş Dersi
// 2019-2020 Güz Dönemi
//============================================
// Karakter Dizisi
//============================================

#include <iostream> 
#include <cstring>					// strlen() fonksiyonu için
#include <locale.h>					// Diller ve karakter setleri kütüphanesi

using namespace std;

int main()
{
	// Sonuç ekranında Türkçe karakterleri kullanabilmek için
	setlocale(LC_ALL, "Turkish");

	char str1[] = "Aynası iştir kişinin lafa bakılmaz!...";

	const int MAX = 80;
	char str2[MAX];

	int uzunluk = strlen(str1);

	for (int i = 0; i < uzunluk; i++)
		str2[i] = str1[i];
	
	str2[uzunluk] = NULL;			// '\0'

	cout << str2 << endl;

	system("pause");

	return 0;
}

