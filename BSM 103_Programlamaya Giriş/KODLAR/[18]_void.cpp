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

void arttir(void *veri, int pSize)
{
	if (pSize == sizeof(char))
	{
		char *pChar;
		pChar = (char*)veri;
		++(*pChar);
	}
	else if (pSize == sizeof(int))
	{
		int *pInt;
		pInt = (int*)veri;
		++(*pInt);
	}
}

int main()
{
	char ch = 'A';
	int  i = 5;
	
	arttir(&ch, sizeof(char));
	arttir(&i, sizeof(int));

	cout << "Karakter    : " << ch << endl;
	cout << "Sayi        : " << i << endl;

	system("pause");
	return 0;
}
