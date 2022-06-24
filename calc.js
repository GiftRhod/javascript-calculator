var operator= prompt("enter operator (either +, -, *, / or %): ");

var num1=window.prompt ("enter a number");

var num2=window.prompt ("enter a number");

num1=parseFloat(num1);
num2=parseFloat(num2);

let result;
if (operator == "+" ) {
    result = num1 + num2;
}

else if (operator == "-" ) {
    result =num1 - num2
}

else if (operator == "*" ) {
    result =num1 * num2
}

else if(operator == "/" ) {
    result =num1 / num2
}

else if(operator== "%" ) {
    result=num1 % num2
}

alert(result);


