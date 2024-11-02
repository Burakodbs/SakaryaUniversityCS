//============================================
// BSM 103 - Programlamaya Giriş Dersi
// 2019-2020 Güz Dönemi
//============================================
// Döngü Yapıları - for
// Üs Alma
//============================================

#include <iostream>
#include <locale.h>					// Diller ve karakter setleri kütüphanesi
#include <iomanip>

using namespace std;

int main()
{
	// Sonuç ekranında Türkçe karakterleri kullanabilmek için
	setlocale(LC_ALL, "Turkish");

	int i;

	for (i = 1; i <= 100; i++)
		cout << setw(10) << left << i << setw(15) << pow(i, 3.0f) << endl; 
	
	system("pause");

	return 0;
}


