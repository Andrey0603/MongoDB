// Задание 2

// Цель практической работы:
// Научиться писать запросы с использованием различных структур данных в MongoDB.

// Что нужно сделать:
// Одним запросом добавьте два документа к коллекции posts:
// creation_date — текущее время, автор — skbx@example.com, topics должен быть списком из одного элемента mongodb;
// creation_date — 31 декабря 2021 года, автор — skbx@example.ru.


db.posts.insertMany([
    { 
        creation_date: new Date(),
        author: "skbx@example.com",
        topics: ["mongodb"]
    },
    {
        creation_date: new Date("2021-12-31"),
        author: "skbx@example.ru"
    }
]);