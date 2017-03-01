"use strict"

//Fick lite hjälp av en kompis
var myIngred= [];

var cakeInput = document.getElementById("numCakes");

//Tagen från https://www.w3schools.com/jsref/event_onkeydown.asp
cakeInput.onkeydown = function(){
	return false;
}

cakeInput.addEventListener("change", changeCakeIngreds);
var myIngredElements = document.getElementsByClassName("mangd");

for(var i = 0; i < myIngredElements.length; i++) {
	myIngred.push(new updateRecept(myIngredElements[i]));
}

//Uppdaterar ingredienserna  
function changeCakeIngreds() 
{
	for (var i = 0; i < myIngred.length; i++) {
		myIngred[i].update(this.value);
	}
}

function updateRecept(tmpElement)
{
	this.tmpElement = tmpElement;
	this.cakeIngredAmount = tmpElement.innerHTML;
	this.update = function(cakeInput){
		this.tmpElement.innerHTML = this.cakeIngredAmount * cakeInput;
	};
}


