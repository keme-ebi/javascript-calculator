// assigning values
const num1 = parseFloat(prompt('Enter first nmber: '));
const num2 = parseFloat(prompt('Enter second nymber: '));

// choosing operator
const operator = prompt('choose operator(+, -, *, /)');
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
    alert(result)
}