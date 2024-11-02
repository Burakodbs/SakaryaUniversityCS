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

#include <string>
#include <iomanip>

//#include "Ogrenci.h"

//#include "Bolum.h"
//#include "Personel.h"
//#include "Tarih.h"


int main()
{	

	 

	int 	intvar;             	//integer değişken
	float 	flovar;              	//float değişken

	int* 	ptrint;               	//int gösteren işaretçi
	float* 	ptrflo;             	//float gösteren işaretçi
	void* 	ptrvoid;             	//void gösteren işaretçi

	ptrint = &intvar;          		//int* to int*
 // ptrint = &flovar;          		//Hata, float* to int*
 // ptrflo = &intvar;          		//Hata, int* to float*
	ptrflo = &flovar;          		//float* to float*

	ptrvoid = &intvar;         		//int* to void*
	ptrvoid = &flovar;         		//float* to void*

	 system("pause");
	 return 0;
}
