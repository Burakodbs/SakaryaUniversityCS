//============================================
// BSM 103 - Programlamaya Giriş Dersi
// 2019-2020 Güz Dönemi
//============================================
// Çok Boyutlu Dizi
//============================================

#include <iostream> 
#include <iomanip> 
#include <stdlib.h>
#include <ctime>					// time() fonksiyonu için
#include <locale.h>					// Diller ve karakter setleri kütüphanesi
//#define ESAY 10

using namespace std;

const int SATIR = 6;
const int SUTUN = 5;


int main()
{
	// Sonuç ekranında Türkçe karakterleri kullanabilmek için
	setlocale(LC_ALL, "Turkish");

	int matris[SATIR][SUTUN];

	srand(time(0));

	// Rasgele Değer Üretme
	for (int i = 0; i < SATIR; i++)
		for (int j = 0; j < SUTUN; j++)
			matris[i][j] = rand() % 10 + 1;

	// Ekrana Yazdırma
	for (int i = 0; i < SATIR; i++)
	{
		for (int j = 0; j < SUTUN; j++)
			cout << setw(5) << matris[i][j];
		cout << endl;
	}

	cout << endl << matris[0][0] + matris[5][4] << endl;
	
	system("pause");

	return 0;
}

