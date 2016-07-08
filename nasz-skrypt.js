function Telefon(marka, cena, kolor){
	this.marka = marka;
	this.cena = cena;
	this.color = kolor;
};

Telefon.prototype.printInfo = function() {
	document.write("Marka telefonu :" + this.marka + "<br> " + "cena :" + this.cena +"<br>" + "Kolor : " + this.color + "<br>");
};
var iPhone6S = new Telefon('Apple', 'srebrny', 2250);
var samsung6 = new Telefon('Samsung', 'czarny', 2250);
var nokia = new Telefon('Nokia', 'zielony', 2250);

iPhone6S.printInfo();
samsung6.printInfo();
nokia.printInfo();

