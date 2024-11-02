//=========================================
// BSM 103 - Programlamaya Giriş Dersi
// 2019-2020 Güz Dönemi
//=========================================
// Sınıf ve Nesne 
//=========================================

#include <iostream>
#include <iomanip>
#include <string> 
#include <locale.h>					// Diller ve karakter setleri kütüphanesi

using namespace std;

class Personel
{
private:
	string ad;
	string soyad;
	string adres;
	int sicilNo;
	double maas;	//Yıllık Maaş

	double aylikMaas()
	{
		return getMaas() / 12;
	}

public:

	void setAdres(string adr)
	{
		if (adr.length() > 50)
			adres = adr.substr(0, 50);
		else
			adres = adr;
	}

	string getAdres()
	{
		return adres;
	}

	double getMaas()
	{
		return maas;
	}

	void setMaas(double _maas)
	{
		maas = _maas;
	}

	void bilgiGoster()
	{
		cout << "Ad Soyad    : " << ad << " " << soyad << endl
			<< "Adres       : " << adres << endl
			<< "Sicil No    : " << sicilNo << endl
			<< "Yıllık Maaş : " << maas << endl;
	}

	void bilgiGir()
	{
		cout << "Personelin Adını Giriniz:";
		cin >> ad;
		cout << "Personelin Soyadını Giriniz:";
		cin >> soyad;
		cout << "Personelin Adresini Giriniz:";
		cin >> adres;
		cout << "Personelin Sicil Numarasını Giriniz:";
		cin >> sicilNo;
		cout << "Personelin Yıllık Maaşını Giriniz:";
		cin >> maas;

	}

	void maasGoster()
	{
		cout << "Aylık Maaşınız : " << aylikMaas();

	}


	float aylikToplamMaas(int mesaiSaati, float mesaiUcreti)
	{
		return aylikMaas() + mesaiSaati * mesaiUcreti;
	}

};//Personel Sınıfı Sonu


int main()
{
	// Sonuç ekranında Türkçe karakterleri kullanabilmek için
	setlocale(LC_ALL, "Turkish");

	Personel p1;
	Personel p2;
	//float mesaiUcreti;
	//int mesaiSaati;      
	//p1.ad="ahmet";  

	p1.bilgiGir();
	p2.bilgiGir();

	p1.bilgiGoster();
	cout << "\n--------------------------\n";
	p2.bilgiGoster();

	system("pause");

	return 0;
}



