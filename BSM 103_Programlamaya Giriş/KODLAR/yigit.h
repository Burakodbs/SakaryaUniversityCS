//=========================================
// Adı				: Programlamaya Giriş 
// Yazar			: Gülüzar ÇİT
// Versiyon			: 1.0
// Telif Hakkı		: @Copyright 2018
//=========================================
// Nesnete Dayalı Prg & Kalıtım 
//=========================================

#include <iostream>
using namespace std;

typedef int YigitVeriTipi;

const int KAPASITE = 4;

//---------- Arayüz ------------
class Yigit
{
private:   int elemanSayisi;
		   YigitVeriTipi depolamaBirimi[KAPASITE];
public:
	Yigit();
	bool bosmu() const;
	bool dolumu() const;
	YigitVeriTipi pop();
	void push(YigitVeriTipi);
	int getElemanSayisi() const;
	void setElemanSayisi(int elemanSayisi);

};

//---------- Gerçekleme ------------

Yigit::Yigit()
{
	this->setElemanSayisi(0);
	cout << "Temel sinif yapicisi";
}


bool Yigit::bosmu() const
{
	return (this->getElemanSayisi() > 0) ? 0 : 1;
}

bool Yigit::dolumu() const
{
	return (this->getElemanSayisi() >= KAPASITE) ? 1 : 0;
}

YigitVeriTipi Yigit::pop()
{
	return this->depolamaBirimi[--elemanSayisi];
}

void Yigit::push(YigitVeriTipi deger)
{
	this->depolamaBirimi[elemanSayisi++] = deger;
}


int Yigit::getElemanSayisi() const
{
	return this->elemanSayisi;
}

void Yigit::setElemanSayisi(int elemanSayisi)
{
	this->elemanSayisi = elemanSayisi;
}



