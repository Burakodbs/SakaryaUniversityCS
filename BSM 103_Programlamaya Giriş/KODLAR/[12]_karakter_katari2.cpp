//============================================
// BSM 103 - Programlamaya Giriş Dersi
// 2019-2020 Güz Dönemi
//============================================
// Karakter Katarı - C String
//============================================

#include <iostream> 
#include <cstring>					
#include <locale.h>					// Diller ve karakter setleri kütüphanesi

using namespace std;

int main()
{
	// Sonuç ekranında Türkçe karakterleri kullanabilmek için
	setlocale(LC_ALL, "Turkish");

	char kopya1[50], kopya2[50], kelime[50];

	int s;

	cout << "Metin Giriniz: ";
	cin >> kelime;

	strcpy_s(kopya1, kelime);      	// kelime katarını kopya1'e kopyala
	cout << kopya1 << endl;

	strncpy_s(kopya2, kelime, 4);   	// kelime nin ilk 4 karakterini kopyala
	cout << kopya2 << endl;

	if (strcmp(kopya1, kelime) == 0)	// kopya1 ve kelime yi karsilastir
		cout << "kopyalama tamamdır";

	strcat_s(kopya1, kelime);            // kelimeyi kopya1'e ekle

	cout << kopya1 << endl;

	system("pause");

	return 0;
}

