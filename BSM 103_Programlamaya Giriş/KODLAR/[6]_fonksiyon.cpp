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

void copystr(char*, const char*); 

int main()
{
	const char* str1 = "SAKARYA UNIVERSITESI";
	char str2[80];               

	copystr(str2, str1);         //str1'i str2'ye kopyala
	cout << str2 << endl;
	
	system("pause");
	return 0;
}

void copystr(char* hedef, const char* kaynak)
{
	while (*kaynak)				//null karakterine kadar,
		*hedef++ = *kaynak++;	//kaynaktaki karakterleri hedefe kopyalar
	*hedef= '\0';               //hedefi sonlandır
}
