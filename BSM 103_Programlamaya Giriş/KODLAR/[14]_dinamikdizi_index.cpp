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

struct Ogrenci
{
	string	numara;				// char numara[10]; şeklinde tanımlansaydı eğer(statik data bölgesinde global bölge
								// (derleyiciye göre değişebiliyor)), 10 karakerden daha büyük 
								// Mantıksal hata. string ile nesne oluşturulduğunda daha büyük veriler için de ayarlamalar 
								// yapılıyor ama kullanıcıdan soyutlanıyor...
	string	ad;
	string	soyad;
	float	genelOrtalama;
};

int main()
{	
	int ogrenciSayisi = 0;	cin >> ogrenciSayisi;
	string reminder;
	getline(cin, reminder); //cin den sonra getline varsa bu satır mutlaka yazılmalı...
	//cin>> new line karakterini almıyor. sonrasında kullanılan getline bu karakteri alıyor
	// ve okuma işlemini tamamlamış oluyor.(Sorun...)

	Ogrenci* ogrenciler = new Ogrenci[ogrenciSayisi];

	for (int i = 0; i < ogrenciSayisi; i++)
	{
		cout << "NUMARA     : ";	 cin >> ogrenciler[i].numara;
		cout << "AD         : ";	 cin >> ogrenciler[i].ad;
		cout << "SOYAD      : ";	 cin >> ogrenciler[i].soyad;
		cout << "GENEL ORT. : ";	 cin >> ogrenciler[i].genelOrtalama;// = 8;
		//getline(cin,ogrenciler[i].genelOrtalama);
		cout << "\n------------------------------\n";
	}

	for (int i = 0; i < ogrenciSayisi; i++)
	{
		cout << "\n------------------------------\n";
		cout << "NUMARA     : " << ogrenciler[i].numara << endl;
		cout << "AD         : " << ogrenciler[i].ad << endl;
		cout << "SOYAD      : " << ogrenciler[i].soyad << endl;
		cout << "GENEL ORT. : " << ogrenciler[i].genelOrtalama << endl;
	}

	delete[] ogrenciler;

	ogrenciler = NULL;

	system("pause");
	return 0;
}
