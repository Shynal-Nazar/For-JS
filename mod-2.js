console.log('Hello');

// ---------------------------------------------------------------------------------------------------------////

// Сервису гравировки украшений нужна функция, которая бы автоматически считала цену гравировки, в зависимости
//  от количества слов и цены за слово.
// Объявлена функция calculateEngravingPrice(message, pricePerWord).Эта функция принимает строку, состоящую из 
// слов разделённых только пробелами(параметр message) и цену гравировки одного слова(параметр pricePerWord).
// Напиши тело функции, чтобы она возвращала общую стоимость гравировки всех слов в строке.
// Тесты
// •	Объявлена функция calculateEngravingPrice(message, pricePerWord)
// •	Вызов calculateEngravingPrice("JavaScript is in my blood", 10) возвращает 50
// •	Вызов calculateEngravingPrice("JavaScript is in my blood", 20) возвращает 100
// •	Вызов calculateEngravingPrice("Web-development is creative work", 40) возвращает 160
// •	Вызов calculateEngravingPrice("Web-development is creative work", 20) возвращает 80

// const add = function calculateEngravingPrice(message, pricePerWord) {
//     // Change code below this line
  
//   return message.split(" ").length * pricePerWord


//     // Change code above this line
// }

// const newResyltat = add ("JavaScript is in my blood", 10);
// console.log("Suma gravirovky: ",newResyltat)
// const newResyltat1 = add ("Web-development is creative work", 40);
// console.log("Suma gravirovky: ",newResyltat1) 

// ---------------------------------------------------------------------------------------------------------////

// ---------------------------------------------------------------------------------------------------------////

// Термин slug - это человеко-понятный уникальный идентификатор, который используется в веб-разработке для создания читабельных URL-адесов.
// Например, вместо того чтобы пользователь увидел в адресной строке mysite.com / posts / 1q8fh74tx, можно сделать slug из названия статьи. 
// В результате адрес получится более приятным для восприятия: mysite.com / posts / arrays -for-begginers.
//                 Внимание            Slug это всегда строка в нижнем регистре, слова которой разделены тире.
// Напиши функцию slugify(title) которая принимает заголовок статьи, параметр title, и возвращает slug, созданный из этой строки.
// •	Значением параметра title будут строки, слова которых разделены только пробелами
// •	Все символы slug должны быть в нижнем регистре
// •	Все слова slug должна быть разделены тире
// Тесты
// •	Объявлена функция slugify(title)
// •	Вызов slugify("Arrays for begginers") возвращает "arrays-for-begginers"
// •	Вызов slugify("English for developer") возвращает "english-for-developer"
// •	Вызов slugify("Ten secrets of JavaScript") возвращает "ten-secrets-of-javascript"
// •	Вызов slugify("How to become a JUNIOR developer in TWO WEEKS") возвращает "how-to-become-a-junior-developer-in-two-weeks"


// const add = function slugify(title)  {
//     // Change code below this line
  
//   return title.toLowerCase().split(" ").join("-")


//     // Change code above this line
// }

// const newResyltat = add ("Arrays for begginers");
// console.log(newResyltat)

// ---------------------------------------------------------------------------------------------------------////

// ---------------------------------------------------------------------------------------------------------////

// Напиши функцию makeArray(firstArray, secondArray, maxLength) для создания нового массива со всеми элементами двух 
// исходных firstArray и secondArray.Параметр maxLength содержит максимально допустимую длину нового массива.
// Если количество элементов нового массива больше maxLength, функция должна вернуть копию массива
// Вызов makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4) возвращает ["Mango", "Poly", "Houston", "Ajax"]
// Вызов makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3) возвращает ["Mango", "Ajax", "Chelsea"]
// Вызов makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2) возвращает ["Earth", "Jupiter"]
// Вызов makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4) возвращает ["Earth", "Jupiter", "Neptune", "Uranus"]

// const add = function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
  
//   return firstArray.concat(secondArray).slice(0, maxLength)


//     // Change code above this line
// }

// const newResyltat = add (["Mango", "Poly"], ["Ajax", "Chelsea"], 3);
// console.log(newResyltat)
// const newResyltat1 = add (["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3);
// console.log(newResyltat1)  

// ---------------------------------------------------------------------------------------------------------////

// Дополни код так, чтобы переменные содержали частичные копии исходного массива fruits.
// firstTwoEls - массив из первых двух элементов
// nonExtremeEls - массив из всех элементов кроме первого и последнего
// lastThreeEls - массив из трёх последних элементов

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];
	
// 	// Change code below this line
// 	const firstTwoEls = fruits.slice(0, 2);
// 	console.log(firstTwoEls)
// 	const nonExtremeEls = fruits.slice(1, -1);
// 	console.log(nonExtremeEls)
// 	const lastThreeEls = fruits.slice(-3);
// 	console.log(lastThreeEls)

// ---------------------------------------------------------------------------------------------------------////

// ---------------------------------------------------------------------------------------------------------////

// Напиши функцию calculateTotal(number), которая принимает целое число(параметр number) и возвращает сумму всех
// целых чисел от единицы и до этого числа.Например, если number равно 3, то сумма это 1 + 2 + 3, то есть 6.


// const add = function calculateTotal(number) {
//  // Change code below this line
//   let total = 0;
//   for (let i = 0; i <= number; i += 1) {
//     console.log(i);
//     total += i;
// }
//   return total;
// }
// const newResyltat = add (3);
// console.log(newResyltat) 

// ---------------------------------------------------------------------------------------------------------////

// ---------------------------------------------------------------------------------------------------------////

// Дополни код цикла for так, чтобы он последовательно логировал все элементы массива fruits.

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i+=1 ) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// ---------------------------------------------------------------------------------------------------------////

// ---------------------------------------------------------------------------------------------------------////

// Напиши функцию calculateTotalPrice(order), которая принимает один параметр order - массив чисел, и рассчитывает 
// общую сумму его элементов.Общая сумма элементов должна сохраняться в переменной total, которая возвращается,
// как результат работы функции.
// Тесты
// Объявлена функция calculateTotalPrice(order)
// Вызов функции calculateTotalPrice([12, 85, 37, 4]) возвращает 138
// Вызов функции calculateTotalPrice([164, 48, 291]) возвращает 503
// Вызов функции calculateTotalPrice([412, 371, 94, 63, 176]) возвращает 1116
// Вызов функции calculateTotalPrice() со случайным массивом возвращает правильное значениех чисел от единицы и до этого числа.
// Например, если number равно 3, то сумма это 1 + 2 + 3, то есть 6.


// const add = function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (let i = 0; i < order.length; i += 1) {
//     // console.log(order[i]);
//     total += order[i];
//   }
//     return total;
// }
// const newResyltat = add ([12, 85, 37, 4, 85, 37, 4, 85, 37, 4]);
// console.log("total:", newResyltat) 

// ---------------------------------------------------------------------------------------------------------////


console.log('Hello');