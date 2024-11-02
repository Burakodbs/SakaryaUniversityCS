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

struct Olcu
{
	int metre;
	int cmetre;
};

int main()
{
	Olcu *d1 = new Olcu;							// Belleğin heap bölgesinden yer açar       
	//Olcu *d1 = (Olcu *)malloc(2*sizeof(Olcu));	// C tarzı yer ayırma

	cout << "uzunluk(metre) giriniz: ";		cin >> d1->metre;
	cout << "uzunluk(cmetre) giriniz:: ";	cin >> d1->cmetre;

	cout << d1->metre << " m " << d1->cmetre << " cm" << endl;

	system("pause");
	return 0;
}


