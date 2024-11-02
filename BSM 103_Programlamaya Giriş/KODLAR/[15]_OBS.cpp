//==========================================
// Adı				: Programlamaya Giriş 
// Yazar			: Gülüzar ÇİT
// Versiyon			: 1.0
// Telif Hakkı		: @Copyright 2018
//=========================================
// İşaretçiler 
//=========================================

#include <iostream>
using namespace std;

#include <string>
#include <iomanip>
#include "Ogrenci.h"

int main()
{	
	int ogrenciSayisi = 0;
	cin >> ogrenciSayisi;

	string gecici;
	getline(cin, gecici);

	Ogrenci* ogrenciler = new Ogrenci[ogrenciSayisi]; // heap bölgesi

	Ogrenci ogr1;									  // stack bölgesindedir
	
	Ogrenci* ogr2 = new Ogrenci();
	
	for (int i = 0; i < ogrenciSayisi; i++)
	{
		ogrenciler[i].bilgiGirisi();
		//cout<<(ogrenciler+i)->getAd();
	}

	for (int i = 0; i < ogrenciSayisi; i++)
	{
		ogrenciler->bilgiYazdir(); 
		ogrenciler++;
	}

	ogr1.bilgiGirisi();
	cout << ogr1.getAd();
	cout << ogrenciler[0].getAd();
	cout << (ogrenciler+1)->getAd();

	ogr2->bilgiGirisi();

	system("pause");
	return 0;
}
