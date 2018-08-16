//Пользователь вводит два числа. Нужно найти случайное число в заданном диапазоне 5-10.
var min = parseInt(prompt("Please enter min number"));
var max = parseInt(prompt("Please enter max number"));
var answer = getRandomInteger(min, max);

alert (getMessage(min, max) + answer);

// Округляем до ближайшего большего целого
function roundMax (max) {
    max = Math.ceil(max);
}

// Возвращаем наибольшее целое число, которое <=целому числу
function roundMin(min) {
    min = Math.floor(min);
}


//Формируем текст, который будет выведен по завершению работы
function getMessage(min, max) {
    return "Random number between " + min + " and " + max + " is ";
}

// Находим случайное число в диапазоне
function getRandomInteger(min, max) {
    roundMin(min);
    roundMax(max);
    return Math.floor(Math.random() * (max - min)) + min;
}





