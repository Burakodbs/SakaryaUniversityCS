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

int kareAl(int x)
{
	return x * x;
}

int kubAl(int x)
{
	return x * x*x;
}


int main()
{
	int(*islem)(int);
	
	int		i;
	char	c;

	cout << "Bir Sayi Gir : ";	cin >> i;
	cout << " İŞLEM [Kare Alma - 1,  Küp Hesaplama - 2]"; cin >> c;
	
	if (c == '1')
		islem = kareAl;
	else if (c == '2')
		islem = kubAl;
	else {
		cout << "Yanlis Secim";
		return 0;
	}

	cout << "Sonuc = " << islem(i) << endl;

	system("pause");
	return 0;
}
 