//============================================
// BSM 103 - Programlamaya Giriş Dersi
// 2019-2020 Güz Dönemi
//============================================
// Rasgele Sayı Üretimi
//============================================

#include <iostream> 
#include <iomanip> 
#include <stdlib.h>
#include <ctime>					// time() fonksiyonu için
#include <locale.h>					// Diller ve karakter setleri kütüphanesi
//#define ESAY 10

using namespace std;

const int ESAY = 25000;


int main()
{
	// Sonuç ekranında Türkçe karakterleri kullanabilmek için
	setlocale(LC_ALL, "Turkish");

	int dizi[ESAY];
	int sayi, tekrar;
	char devam;

	do
	{
		tekrar = 0;
		
		srand(time(0));
		for (int i = 0; i < ESAY; i++)
		{
			dizi[i] = rand() % 11;
			cout << dizi[i] << " ";
		}

		do
		{
			cout << "\nSayi giriniz(0-10 arası):";
			cin >> sayi;
		} while (!(sayi > 0 && sayi <= 10));

		for (int j = 0; j < ESAY; j++)
		{
			if (sayi == dizi[j])
				tekrar++;
		}

		cout << "\n" << tekrar << endl;
		//system("pause");
		do
		{
			cout << "Devam Etmek İstiyor musunuz? [E / H]";
			cin >> devam;
		} while (!(devam == 'e' || devam == 'E' || devam == 'h' || devam == 'H'));
		
	} while (devam == 'e' || devam == 'E');

	//system("pause");

	return 0;
}

