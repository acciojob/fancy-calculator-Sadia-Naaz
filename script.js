//your JS code here. If required.
function FancyCalculator(num1,num2) {
	var product = parseFloat(num1)*2;
	var sum = product+parseFloat(num2);
	return sum;

	 }
var number1 =prompt("enter first number");
var number2 =prompt("enter second number");
	var result =FancyCalculator(number1,number2);
alert("The final result is: " + 
	  result);
