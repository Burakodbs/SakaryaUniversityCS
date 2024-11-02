#include "Ogrenci.h"
#include <iostream>
#include <iomanip>

Ogrenci::Ogrenci()
{
	this->setAd("");
	this->setSoyad("");
	this->setNumara("");
	this->setNotOrtalamasi(0);
}

/*
Ogrenci::Ogrenci(string ad, string soyad, string numara, int ortalama)
{
	this->setAd(ad);
	this->setSoyad(soyad);
	this->setNumara(numara);
	this->setNotOrtalamasi(o);
}
*/

void Ogrenci::bilgiGirisi()
{
	cout << "Adi giriniz: ";		getline(cin, ad); cout << endl;
	cout << "Soyadi giriniz: ";		getline(cin, soyad); cout << endl;
	cout << "Ogrenci No giriniz: ";	getline(cin, numara);; cout << endl;
	cout << "Ortalama giriniz: ";	cin >> notOrtalamasi; cout << endl;
	
	string remainder; // satýrýn kalanýný oku
	getline(cin, remainder);
}

void Ogrenci::bilgiYazdir()
{
	cout << setw(20) << ad;
	cout << setw(20) << soyad;
	cout << setw(20) << numara;
	cout << setw(20) << notOrtalamasi;
	cout << endl << setw(20) << "----------------------------" << endl;

}

string Ogrenci::getAd() const
{
	return ad;
}

void Ogrenci::setAd(string ad)
{
	this->ad = ad;
}

int Ogrenci::getNotOrtalamasi() const
{
	return notOrtalamasi;
}

void Ogrenci::setNotOrtalamasi(int notOrtalamasi)
{
	this->notOrtalamasi = notOrtalamasi;
}

string Ogrenci::getNumara() const
{
	return numara;
}

void Ogrenci::setNumara(string numara)
{
	this->numara = numara;
}

string Ogrenci::getSoyad() const
{
	return soyad;
}

void Ogrenci::setSoyad(string soyad)
{
	this->soyad = soyad;
}

Ogrenci::~Ogrenci()
{
	cout << "Yikici Calisiyor...";
}


