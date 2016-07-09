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

var btn1 = new Button('Hello!');
btn1.create();

