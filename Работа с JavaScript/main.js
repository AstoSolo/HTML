// Конкатенация строк
let firstName, lastName;
firstName = "Roman";
lastName = "Smirnov";
console.log('Hello ' + firstName + ' ' + lastName);

// Математические операции
let a, b, c, d;
a = 1;
b = 2;
c = 3;
d = 4;

let sum = a + b;
let min = c - b;
let mul = b * c
let div = d / b;
let per = d % c;
console.log('Summary a + b = ' + sum);
console.log('Minus c - b = ' + min);
console.log('Multiply b * c = ' + mul);
console.log('Divide d / b = ' + div);
console.log('Percent d % c = ' + per);

// Работа с булевыми значениями
let isTrue, isFalse;
isTrue = true;
isFalse = false;
console.log(isTrue && isFalse);
console.log(isTrue || isFalse);
console.log(!isTrue);

// Инкремент и декремент
let counter;
counter = 7;
console.log ('Значение в counter = ' + counter)
console.log (counter + 1)
console.log (counter - 1)

// Создание сообщения
let greeting, name, message;
greeting = "Wassup "
name = "Roman"
message = greeting + name;
console.log (message)

// Cклеивание строк
let prefix, middle, suffix;
prefix = "What a ";
middle = "wonderful ";
suffix = "day!";
console.log (prefix + middle + suffix)

// Работа с числами и строками
let num1, num2, result;
num1 = 11;
num2 = 22;
result = num1 + num2;
console.log ('Результат: ' + result)

//Модификация строк
let modif = "Текстовая строка";

let upperCaseModif = modif.toUpperCase();
let lowerCaseModif = modif.toLowerCase();

console.log("Текст в верхнем регистре:", upperCaseModif);
console.log("Текст в нижнем регистре:", lowerCaseModif);
