"use strict"

//Fick lite hjälp av en kompis
var myIngred= [];



var cakeInput = document.getElementById("numCakes");

//Tagen från https://www.w3schools.com/jsref/event_onkeydown.asp
cakeInput.onkeydown = function(){
	return false;
}

cakeInput.addEventListener("change", changeCakeIngreds);
var elements = document.getElementsByClassName("mangd");

for(var i = 0; i < elements.length; i++) {
	myIngred.push(new updateRecept(elements[i]));
}

//Uppdaterar ingredienserna  
function changeCakeIngreds() 
{
	for (var i = 0; i < myIngred.length; i++) {
		myIngred[i].update(this.value);
	}
}

function updateRecept(element)
{
	this.element = element;
	this.cakeIngredAmount = element.innerHTML;
	this.update = function(cakeInput){
		this.element.innerHTML = this.cakeIngredAmount * cakeInput;
	};
}


