// Question 1

var character = prompt("Write a digit")

if (character >= "A" && character <= "Z")
		{document.write (character +  " is an UpperCase character <br>")
} else if (character >= "a" && character <= "z")
		{document.write (character + " is an LowerCase character <br>")
} else if (character >="0" && character !="@")
  	{document.write (character + " is a Numeric Digit <br>")
} else {document.write (character + " is not a alphabetic or Numeric character <br>")}
	
	   


// Question 2
var num1=+prompt("write a number First")
var num2=+prompt("write a number Second")

if (num1==num2) {
    document.write("Both Number are Equal <br>");
} else if(num1>num2){
    document.write("First Number is Greater then Second Number <br>")
}else{
    document.write("Second Number is Greater then First Number <br>")
}

// Question 3
var dig=+prompt("write a number")

if (dig>0) {
    document.write("Number is Positive <br>");
} else if(dig<0){
    document.write("Number is Negitive <br>")
}else{
    document.write("Number is Zero <br>")
}


// Question 4

var vowel= prompt("Write a alphabet") 


if (vowel=="a") {
			document.write("It is vowel (true) <br>")
} else if(vowel =="e") {
	document.write("It is vowel (true)<br>")
} else if (vowel=="i") {
	document.write("It is vowel (true)<br>")
} else if (vowel=="o") {
	document.write("It is vowel (true)<br>")
} else if (vowel=="u") {
	document.write("It is vowel (true)<br>")
} else  {document.write("It is not vowel (false)<br>")}
		
	
// Question 5

var Password=6789 
var value= +prompt("Please enter Password (6789)") 

if (value == Password ){
	document.write("Password is correct! <br>")
} else if (value !== Password && value > 0){
	document.write("Password is Incorrect <br>")
} else { document.write("Password enter your Password <br>")
} 


// Question 6

var hour = +prompt("Please enter time of your attendence (1 - 24 hours)") 

if (hour < 18) {
	document.write ("Good day")}
else if (hour >= 18 && hour <= 24) {
document.write("Good evening")
}


