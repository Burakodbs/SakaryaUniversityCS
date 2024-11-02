//=========================================
// BSM 103 - Programlamaya Giriş Dersi
// 2019-2020 Güz Dönemi
//=========================================
#include <iostream>
#include <cmath>

using namespace std;

#include "KarmasikSayi.h"

const float PI = 3.14;

KarmasikSayi::KarmasikSayi()
{
	cout << "Yapici calisti!...";
	this->setGercel(0.0);
	this->setSanal(0.0);
	//sanal=0.0;
	//gercel=0.0;

}

KarmasikSayi::KarmasikSayi(double sayi1, double sayi2)//:gercel(sayi1), sanal(sayi2)
{
	cout << "Yapici calisti!...";

	this->setGercel(sayi1);
	this->setSanal(sayi2);
}

KarmasikSayi::~KarmasikSayi()
{
	cout << "Yikici Calisti!...";
}

double KarmasikSayi::getGercel() // const
{
	return gercel;
}

void KarmasikSayi::setGercel(double gercel)
{
	this->gercel = gercel;
}

double KarmasikSayi::getSanal()  // const
{
	return sanal;
}

void KarmasikSayi::setSanal(double sanal)
{
	this->sanal = sanal;
}

void KarmasikSayi::kartezyenGoster()
{
	cout << "Sayinin degeri: " << getGercel() << "+" << getSanal() << "i" << endl;
}

void KarmasikSayi::bilgiGir()
{
	double gercel1, sanal1;
	cout << "Sayinin gercel kismini giriniz:";
	cin >> gercel1; setGercel(gercel1);
	cout << "Sayinin sanal kismini giriniz:";
	cin >> sanal1; setSanal(sanal1);
}

void KarmasikSayi::karmasikTopla(KarmasikSayi a)
{
	cout << "\Toplam => " << gercel + a.gercel << " + "
		<< sanal + a.sanal << "i";
}

KarmasikSayi KarmasikSayi::karmasikTopla(KarmasikSayi a, KarmasikSayi b)
{
	KarmasikSayi c;
	c.gercel = a.gercel + b.gercel;
	c.sanal = a.sanal + b.sanal;

	return c;
}

