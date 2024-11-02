#ifndef TARIH_H
#define TARIH_H
#include <iostream>
#include <string>

using namespace std;

class Tarih
{
public:
	Tarih(int gn = 1, int = 1, int = 1900); 
	//Tarih();
	void yazdir();
	~Tarih();
	void bilgiGir();

private:
	int ay; // 1-12 (Ocak-Aralik)
	int gun;
	int yil;

}; 


//Tarih::Tarih( )
//{  }

Tarih::Tarih(int gn, int a, int yl)
{
	if (a > 0 && a <= 12) 
		ay = a;
	else
	{
		ay = 1;
		cout << "Gecersiz bir ay girdiniz, (" << a << ") 1 olarak degistirildi.\n";
	}

	yil = yl;
	gun = gn;

	cout << "Varsayilan Tarih yapicisi Calisti: " << gun << ay << yil;

}

void Tarih::bilgiGir()
{
	cout << " gun" << " ay" << "  yil";
	cin >> gun >> ay >> yil;
}

void Tarih::yazdir()
{
	cout << gun << '/' << ay << '/' << yil;
}

Tarih::~Tarih()
{
	cout << "Yikici Calisti...";
	yazdir();
	cout << endl;
}


#endif
