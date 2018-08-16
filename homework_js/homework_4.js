//Найти х методом перебора кх + с = 0.
// Ограничить ввод пользователя( сколько попыток может сделать пользователь, извиниться).

var counter = parseInt(prompt('Please, enter the number of attempt'));

for (i=0; i < counter; i++) {
    var k = parseInt(prompt('Enter k'));
    var c = parseInt(prompt('Enter c'));
    var x = (-c) / k;
    alert(x);
}

alert("Sorry, your attempts've been used");



