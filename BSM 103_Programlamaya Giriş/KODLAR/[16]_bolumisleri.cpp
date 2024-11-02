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

//#include "Ogrenci.h"
#include "Bolum.h"
#include "Personel.h"
//#include "Tarih.h"


int main()
{	
	// int ogrenciSayisi;
	cout << "deneme" << endl;

	Bolum  *bilgisayar = new Bolum("Bilgisayar Muhendisligi");
	Bolum emk("Endüstri Müh.");
	
	Personel *ayse = new Personel();
	ayse->bilgiGir();
	
	bilgisayar->setBolumBaskani(ayse);

	Personel* ahmet = new Personel();
	emk.setBolumBaskani(ahmet);
	ahmet->bilgiGir();
	emk.setBolumKoordinatoru(ayse);

	//cout<<"kac ogrenci eklenecek";
	//cin>>ogrenciSayisi;

	//Ogrenci* ogrenciler=new Ogrenci[ogrenciSayisi];
	//bilgisayarMuhendisligi.setOgrenci(ogrenciler);
	//bilgisayarMuhendisligi.setOgrenciSayisi(ogrenciSayisi);

	//for(int i=0;i<ogrenciSayisi;i++)
		//ogrenciler[i].bilgiGirisi();

	 bilgisayar->yazdir();
	 emk.yazdir();

	 delete ahmet;
	 delete ayse;
	 
	 system("pause");
	 return 0;
}
