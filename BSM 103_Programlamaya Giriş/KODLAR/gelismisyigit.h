#include <iostream>
#include "yigit.h"

class GelismisYigit : public Yigit
{
public:
	GelismisYigit();
	YigitVeriTipi pop();
	void push(YigitVeriTipi);
};

GelismisYigit::GelismisYigit()
{
	cout << "Türetilmis sinif yapicisi";
}

YigitVeriTipi GelismisYigit::pop()
{
	if (Yigit::bosmu())
	{
		cout << "YIĞIT BOŞ... HATA!...";
		return -1;
	}
	else
		return Yigit::pop();
}

void GelismisYigit::push(YigitVeriTipi deger)
{
	if (Yigit::dolumu())
	{
		cout << "YIĞIT DOLU... HATA!...";

	}
	else
		Yigit::push(deger);
}