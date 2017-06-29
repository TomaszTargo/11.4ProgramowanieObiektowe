$(function(){
    //this code will execute after the DOM is loaded

//klasa do tworzenia telefonów
function Phone(brand, price, color, model) {
	this.brand = brand;
	//by using this, the "brand" property of the object we create will assume the value of the brand argument
	this.price = price;
	this.color = color;
	this.model = model;
}

//metoda nadająca funkcjonalnosci
Phone.prototype.printInfo = function() {
		console.log("The phone brand is " + this.brand + " and model is " + this.model + ", color is " + this.color + " and the price is " + this.price + ".");
}

//tworzenie obiektów
var iPhone6S = new Phone("Apple", 2250, "silver", "6S");
var Galaxys7 = new Phone("Samsung", 2400, "white", "Galaxy_S7");

//przedstawienie telefonu
iPhone6S.printInfo();
Galaxys7.printInfo();
});
//przypisujemy do zmiennej liste elementów
