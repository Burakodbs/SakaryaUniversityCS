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
	fstream envanter("env.dat", ios::out | ios::binary);
	Envanter kayit= { "", 0, 0.0 };   // {"sakarya", 54, 54.0 } sabit kayit 
	
	// Boş kayıtlar yazılıyor
	for (int count = 0; count < 5; count++)
	{
		cout << "Now writing record " << count << endl;
		envanter.write((char *)&kayit, sizeof(kayit));
	}
	envanter.close();

	system("pause");
	return 0;
}



