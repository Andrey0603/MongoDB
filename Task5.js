
// Задание 5

// Цель практической работы:
// Научиться писать хранимые процедуры в MongoDB.

// Что нужно сделать:
// Создайте хранимую функцию shuffle, которая принимает один параметр — строку и возвращает строку со случайно переставленными символами.

// Советы и указания:
// Используйте встроенный в JavaScript метод Math.random() для сортировки символов в строке.


db.system.js.save({
    _id: "shuffle",
    value: function (str) {
        var array = str.split('');
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array.join('');
    }
});