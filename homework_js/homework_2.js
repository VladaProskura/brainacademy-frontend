/* Пользователь вводит любое кличество слов, разделенное пробелами.
Нужно вывести каждое отдельное слово на экран.
Предлагать вывести текст бесконечное количество раз.
*/
var rowString;

while (true){
    rowString = prompt('Please, enter few words separated by spaces');

    // " " - пробел
    var wordsArr = rowString.split(" ");

    // wordsArr.forEach(getMessage);
    
    for (i=0; i < wordsArr.length; i++) {
        getMessage(wordsArr[i], i);
    }

    function getMessage(element, index) {
        alert("The word number " + (parseInt(index)+1) + " is " + element);
    }
}



