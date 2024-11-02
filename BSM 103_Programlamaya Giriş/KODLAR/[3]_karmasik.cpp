//=========================================
// BSM 103 - Programlamaya Giriş Dersi
// 2019-2020 Güz Dönemi
//=========================================
// Sınıf ve Nesne 
//=========================================

#include <iostream>
#include <iomanip>
#include <cmath>
#include <locale.h>					// Diller ve karakter setleri kütüphanesi

using namespace std;

const double PI = 3.14159265;


class Karmasik
{
private:

	double gercel;
	double sanal;

	float radyandanDereceye(float a)
	{
		return a * 180 / PI;
	}

public:

	double getGercel() const
	{
		return gercel;
	}

	void setGercel(double gercel)
	{
		this->gercel = gercel;
	}

	double getSanal() const
	{
		return sanal;
	}

	void setSanal(double sanal)
	{
		this->sanal = sanal;
	}

	void bilgiGoster()
	{
		cout << "Sayının Değeri : " << getGercel() << "+" << getSanal() << "i" << endl;
	}

	void bilgiGir()
	{
		double _gercel, _sanal;
		cout << "Sayının Gerçel Kısmını Giriniz : ";
		cin >> _gercel; 
		setGercel(_gercel);
		
		cout << "Sayının Sanal Kısmını Giriniz : ";
		cin >> _sanal; 
		setSanal(_sanal);
	}

	void kutupsalaCevir()
	{
		cout << "\nSayının Kutupsal Karşılığı : ";
		cout << sqrt(pow(getGercel(), 2) + pow(getSanal(), 2)) << "  ";
		cout << radyandanDereceye(atan(getSanal() / getGercel())) << endl;
	}

};

int main()
{
	// Sonuç ekranında Türkçe karakterleri kullanabilmek için
	setlocale(LC_ALL, "Turkish");

	Karmasik sayi1;
	Karmasik sayi2;

	//sayi1.bilgiGir();
	//sayi2.bilgiGir();
	sayi1.bilgiGoster();
	sayi2.bilgiGoster();
	cout << sayi2.getSanal();
	sayi1.kutupsalaCevir();

	system("pause");

	return 0;
}



