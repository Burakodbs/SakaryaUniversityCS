//=========================================
// BSM 103 - Programlamaya Giriş Dersi
// 2019-2020 Güz Dönemi
//=========================================
#ifndef KARMASIKSAYI_H
#define KARMASIKSAYI_H

class KarmasikSayi
{
public:
	KarmasikSayi();
	KarmasikSayi(double, double);
	~KarmasikSayi();

	double getGercel();		// const;
	double getSanal();		// const;

	void setGercel(double);
	void setSanal(double);

	void kartezyenGoster();
	void bilgiGir();

	void karmasikTopla(KarmasikSayi);
	KarmasikSayi karmasikTopla(KarmasikSayi, KarmasikSayi);
private:
	double gercel;
	double sanal;
};

#endif 

