"use strict"

var idNum = document.getElementById('idNumber');
var leapYear = document.getElementById('leapYear');
var digitNum = document.getElementById('numberSum');
var idNumberResult = document.getElementById('idNumberResult');
var leapYearResult = document.getElementById('leapYearResult');
var numberSumResult = document.getElementById('numberSumResult');

setEventListener();

function setEventListener()
{
	idNum.addEventListener("input", validIdNum);

	leapYear.addEventListener("input", isLeapYear);

	digitNum.addEventListener("input", sumDigit);
}


function validIdNum()
{
	var getIdNum = idNum.value;
	getIdNum = getIdNum.replace("-","");
	var num;
	var total = 0;
	
	if(isNaN(getIdNum))
	{
		idNumberResult.innerHTML = "Must input numbers";
		return;
	}
	
	if (getIdNum.length !== 10 && getIdNum.length !== 12) {
		idNumberResult.innerHTML = "Invalid input";
		return;
	}
	
	if(getIdNum.length === 12)
	{
		getIdNum = getIdNum.substring(2);
	}
	
	if(getIdNum.length === 10)
	{
		for(var i = 0; i < getIdNum.length; i++)
		{
			num = parseInt(getIdNum.charAt(i),10);
			if(i % 2 == 0)
			{
				
				if(num*2 >= 10)
				{
					var tmpValue = num*2;
					var rest;
					rest = tmpValue % 10;
					
					rest = rest + 1;
					
					total = total + rest;
					
				}
				else
				{
					total += num*2;
				}
			}
			else
			{
				total +=num;
			}
		}
			
	}
	
	if((total % 10) === 0)
	{
		idNumberResult.innerHTML = "Valid id";
	}
	else
	{
		idNumberResult.innerHTML = "Not Valid id";
	}
	
}

function isLeapYear()
{
	var inputYear = leapYear.value;
	var intYear;
	
	if(isNaN(inputYear) || inputYear == "")
	{
		leapYearResult.innerHTML = "Invalid input";
		return;
	}
	
	intYear = parseInt(inputYear,10);

	if(((intYear%4) == 0 || (intYear%400) == 0) && (intYear%100) != 0 || intYear === 2000)
	{
		leapYearResult.innerHTML = "Is a leap year";
	}
	else
	{
		leapYearResult.innerHTML = "Not a leap year";
	}
	
}

function sumDigit()
{
	var sumOfDigit = digitNum.value;
	var sumInt;
	var total=0;
	if(isNaN(sumOfDigit) || sumOfDigit == "")
	{
		leapYearResult.innerHTML = "Invalid input";
		return;
	}
	
	for(var i = 0; i < sumOfDigit.length; i++)
	{
		sumInt = parseInt(sumOfDigit.charAt(i),10);
		
		total += sumInt;
	}	
	
	if(total>0)
	{
		numberSumResult.innerHTML = total;
	}
	if(sumOfDigit == "")
	{
		total = 0;
		numberSumResult.innerHTML = total;
	}
	
}


