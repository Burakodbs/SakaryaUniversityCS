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

struct Ogrenci
{
	char	numara[10];
	char	ad[10];
	char	soyad[10];
	float	genelOrtalama;
};

int main()
{
	Ogrenci * ogrenciler[100];

	int ogrenciSayisi = 0;	cin >> ogrenciSayisi;

	for (int i = 0; i < ogrenciSayisi; i++)
		ogrenciler[i] = new Ogrenci();

	for (int i = 0; i < ogrenciSayisi; i++)
	{
		cout << "NUMARA     : ";	 cin >> ogrenciler[i]->numara;
		cout << "AD         : ";	 cin >> ogrenciler[i]->ad;
		cout << "SOYAD      : ";	 cin >> ogrenciler[i]->soyad;
		cout << "GENEL ORT. : ";	 cin >> ogrenciler[i]->genelOrtalama;// = 8;
		//getline(cin,ogrenciler[i].genelOrtalama);
		cout << "\n------------------------------\n";
	}

	for (int i = 0; i < ogrenciSayisi; i++)
	{
		cout << "\n------------------------------\n";
		cout << "NUMARA     : " << ogrenciler[i]->numara << endl;
		cout << "AD         : " << ogrenciler[i]->ad << endl;
		cout << "SOYAD      : " << ogrenciler[i]->soyad << endl;
		cout << "GENEL ORT. : " << ogrenciler[i]->genelOrtalama << endl;
	}

	system("pause");
	return 0;
}
 