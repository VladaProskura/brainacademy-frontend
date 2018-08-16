//Ввести число, символ операции, второе число и вывести результат.
var number_1 = parseInt(prompt('Enter the first number'));
var sign = prompt('Enter arithmetic sign');
var number_2 = parseInt(prompt('Enter the second first'));
var result = 0;
switch (sign){
    case '+':
        result = number_1 + number_2;
        break;
    case '-':
        result = number_1 - number_2;
        break;
    case '*':
        result = number_1 * number_2;
        break;
    case '/':
        result = number_1 / number_2;
        break;
    default:
        result = 'Sorry, this is not arithmetic sign';
        break;
}
alert(result);

