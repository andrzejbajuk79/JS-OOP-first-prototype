function Telefon(marka, kolor,cena){
	this.marka = marka;
	this.cena = cena;
	this.color = kolor;
};

var iPhone6S = new Telefon('Apple', 'srebrny', 2250);
var samsung6 = new Telefon('Samsung', 'czarny', 4250);
var nokia = new Telefon('Nokia', 'zielony', 3250);

Telefon.prototype.calculateWarrantyCost = function() {
var warrantyCost = this.cena * 0.12;
document.write("cena gwarancji wynosi :" + warrantyCost + " <br><br>");

console.log (warrantyCost);
};

Telefon.prototype.printInfo = function() {
	document.write("Marka telefonu :" + this.marka + "<br> " + "cena :" + this.cena +"<br>" + "Kolor : " + 
		this.color + "<br>" );
};


iPhone6S.printInfo();
iPhone6S.calculateWarrantyCost();
samsung6.printInfo();
samsung6.calculateWarrantyCost();
nokia.printInfo();
nokia.calculateWarrantyCost();



function Button(text) {
	this.text = text || "HELLO!!";
}

Button.prototype.create =  function() {
        var self = this;
        this.$element = $('<button>');
        this.$element.text(this.text);
        $('body').append(this.$element);
        this.$element.click(function() {
            alert(self.text);
        });
};
var btn1 = new Button('Hello!');
btn1.create();



