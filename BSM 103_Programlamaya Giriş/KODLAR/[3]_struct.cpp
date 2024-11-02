//============================================
// BSM 103 - Programlamaya Giriş Dersi
// 2019-2020 Güz Dönemi
//============================================
// Yapı Tanımlama - struct
//============================================

#include <iostream>
#include <locale.h>					// Diller ve karakter setleri kütüphanesi

using namespace std;

// Yapı Tanımlama
struct urun
{
	int modelNo;
	int parcaNo;
	float ucret;
};


int main()
{

	// Sonuç ekranında Türkçe karakterleri kullanabilmek için
	setlocale(LC_ALL, "Turkish");

	urun urun1;           // urun1 için bellekte yer ayrılır
	
	urun1 = { 5235, 98, 153.15f };
	urun1.modelNo = 2016;
	urun urun2;		// urun2 yapı değişkeni tanımla
	urun2 = urun1; 	// ilk yapı değişkenindeki değerleri ikinci değişkene ata

	cout << urun2.modelNo << endl;

	system("pause");

	return 0;
}

