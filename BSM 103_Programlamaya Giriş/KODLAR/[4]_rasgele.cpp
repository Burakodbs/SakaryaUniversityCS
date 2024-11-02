//==========================================
// Adı				: Programlamaya Giriş 
// Yazar			: Gülüzar ÇİT
// Versiyon			: 1.0
// Telif Hakkı		: @Copyright 2018
//=========================================
// Dosyalama
//=========================================


// Bu program boş kayıt alanlarına sahip bir dosya oluşturur.
#include <iostream>
#include <fstream>
using namespace std;

// Envanter yapısı
struct Envanter
{
	char tanim[31];
	int kalite;
	float ucret;
};

int main()
{
	fstream envanter("env.dat", ios::in | ios::binary);

	Envanter kayit = { "", 0, 0.0 };

	// kayıtlar okunuyor ve gösteriliyor
	envanter.read((char *)&kayit, sizeof(kayit));

	while (!envanter.eof())
	{
		cout << "Tanim    : " << kayit.tanim<< endl;
		cout << "Kalite   : " << kayit.kalite << endl;
		cout << "Ucret    : " << kayit.ucret << endl << endl;
		
		envanter.read((char *)&kayit, sizeof(kayit));
	}

	envanter.close();

	system("pause");
	return 0;
}



