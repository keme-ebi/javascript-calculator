//intro
alert('Simple javascript calculator, click OK to use');

// first number input
const num1 = parseFloat(prompt('Enter first number: '));
// choosing operator
const operator = prompt('choose operator(+, -, *, /)');
// second number input
const num2 = parseFloat(prompt('Enter second number: '));

// conditions
if (isNaN(num1) || isNaN(num2)){
    alert('wrong input, refresh this page and try again');
}else{
    if(operator == '+'){
        result = num1 + num2;
    }else if(operator == '-'){
        result = num1 - num2;
    }else if(operator == '*'){
        result = num1 * num2;
    }else if(operator == '/'){
        result = num1 / num2;
    }
    alert('Your result is: '+result);
}