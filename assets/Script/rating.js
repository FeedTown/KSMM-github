"use strict"

//Kod inspirerad från förra årets hemsida

var receptRating = 0;
var starIndex;
var votesElement = document.getElementById("voteRatings");
var myStarElements = document.getElementsByClassName("star");

window.onload = setEventListeners();


function setEventListeners(){
	
	for (var i = 0; i < myStarElements.length; i++) {
		var tmpElement = myStarElements[i];
		tmpElement.addEventListener("click", mouseClickedStar);
		tmpElement.addEventListener("mouseover", mouseOnStar);
		tmpElement.addEventListener("mouseout", mouseLeaveStar);
	}

};

function mouseClickedStar() {
	receptRating = this.id.substring(this.id.length - 1);
	voteRecept(receptRating);
	getReceptRating();
}

function mouseOnStar(event)
{
	//tagit hjälp från https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
	var element = event.srcElement;
	var starIndex = Array.prototype.indexOf.call(myStarElements, element);
	
	for(var i = 0; i < myStarElements.length; i++)
	{
		var tmpElement = myStarElements[i];
		if(i <= starIndex)
		{
			tmpElement.innerHTML = '&starf;';
		}
		else
		{
			tmpElement.innerHTML = '&star;';
		}
	}
	
}


//Fick hjälp av en kompis
function mouseLeaveStar() {
	for (var i = 0; i < myStarElements.length; i++) {
		var tmpElement = myStarElements[i];
		if (i <= receptRating - 1) {
			tmpElement.innerHTML = '&starf;';
		} else {
			tmpElement.innerHTML = '&star;';
		}
	}
}

//Sätter Votes
function voteRecept(receptRating) {
	
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			return (JSON.parse(this.responseText));
		}
	};
	xhttp.open("GET",
		"https://edu.oscarb.se/sjk15/api/recipe/?api_key=98a8547a8cd67907&recipe=kladdkaka&rating=" + receptRating,
		true);
	xhttp.send();
}

//Får votes
function getReceptRating() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var data = JSON.parse(this.responseText);
			var str = data.rating.toFixed(1) + " av " + data.votes + " röster";
			votesElement.innerHTML = str;
			if (receptRating === 0) {
				receptRating = data.rating.toFixed(0);
			}
			
		}
	};
	xhttp.open("GET",
		"https://edu.oscarb.se/sjk15/api/recipe/?api_key=98a8547a8cd67907&recipe=kladdkaka",
		true);
	xhttp.send();
}