//============================================
// BSM 103 - Programlamaya Giriş Dersi
// 2019-2020 Güz Dönemi
//============================================
// Karakter Katarı
//============================================

#include <iostream> 
#include <cstring>					// strlen() fonksiyonu için
#include <locale.h>					// Diller ve karakter setleri kütüphanesi

using namespace std;

int main()
{
	// Sonuç ekranında Türkçe karakterleri kullanabilmek için
	setlocale(LC_ALL, "Turkish");

	const int DAYS = 7;
	const int MAX = 10;

	char gunler[DAYS][MAX] = { "Pts", "Sali","Cars",
							"Pers","Cuma","Cumartesi","Pazar" };
	
	for (int i = 0; i < DAYS; i++)
		cout << gunler[i] << endl;

	string gunler2[DAYS]={"Pazartesi","Salı","Çarşamba",
						"Perşembe", "Cuma","Cumartesi","Pazar"};

	for (int i = 0; i < DAYS; i++)
		//cout << gunler2[i] << endl;

	system("pause");

	return 0;
}

