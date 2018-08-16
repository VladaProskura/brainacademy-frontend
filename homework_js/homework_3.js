/*Пользователь вводит текст в строку:
Строка _ число индекста старта _ число индекса окончания;
Hello world 0 5 ( выводит то, что находится между двумя индексами)
 */
var str = prompt("Enter the text in the line in format:{Some Text} {number} {number} ");

var strArr = str.split(" ");
var indexFirst = strArr[strArr.length -2];
var indexLast = strArr[strArr.length -1];
subStr = getText(strArr);

var resultStr = subStr.substring(indexFirst, indexLast);

alert("Result String is: " + resultStr);

function getText(stringArray) {
    var resultText = "";
    for (i=0; i < strArr.length-2; i++) {
        resultText = resultText + stringArray[i] + " ";
    }

    return resultText;
}

