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

	cout << strlen(str1);

	// str1'deki metni str2'ye kopyala
	strcpy_s(str2, str1);
	cout << str2 << endl;

	system("pause");

	return 0;
}

