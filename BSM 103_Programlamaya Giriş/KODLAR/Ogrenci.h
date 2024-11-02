#ifndef OGRENCI_H_
#define OGRENCI_H_

#include <iostream>
#include <string>

using namespace std;

class Ogrenci
{
private:
	string ad;
	string soyad;
	string numara;
	int notOrtalamasi;
public:
	Ogrenci();

	~Ogrenci();

	void bilgiGirisi(); 
	void bilgiYazdir();

	void setAd(string ad);
	void setSoyad(string soyad);
	void setNumara(string numara);
	void setNotOrtalamasi(int notOrtalamasi);

	string getAd() const;
	string getNumara() const;
	string getSoyad() const;
	int getNotOrtalamasi() const;	
};

#endif 
