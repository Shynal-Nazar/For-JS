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
//   for (let i = 1; i <= number; i += 1) {
//     console.log(i);
//     total += i;
// }
//   return total;
// }
// const newResyltat = add(3);
// console.log("Resyltat:", newResyltat)

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

// ---------------------------------------------------------------------------------------------------------////

//Напиши функцию findLongestWord(string) которая принимает произвольную строку состоящую только из слов разделённых
//пробелом(параметр string) и возвращает самое длинное слово в этой строке.

//Тесты
//Объявлена функция findLongestWord(string)
//Вызов функции findLongestWord("The quick brown fox jumped over the lazy dog") возвращает jumped
//Вызов функции findLongestWord("Google do a roll") возвращает Google
// Вызов функции findLongestWord("May the force be with you") возвращает force
// Вызов функции findLongestWord() со случайной строкой возвращает правильное значение

// const add = function findLongestWord(string) {
//     const arrayWords = string.split(' ');
//     let biggestWord = arrayWords[0];
//     for (let i = 0; i < arrayWords.length; i += 1) {
//         if (arrayWords[i].length > biggestWord.length) {
//             biggestWord = arrayWords[i];
//         }
//     }
//     return biggestWord;
// }

// const newResyltat = add ("The quick brown fox jumped over the lazy dog");
// console.log("resalt:", newResyltat)

// ---------------------------------------------------------------------------------------------------------////
// ---------------------------------------------------------------------------------------------------------////

//Дополни код функции createArrayOfNumbers(min, max) так, чтобы она возвращала массив всех целых чисел от значения min до max.

// Тесты
// Объявлена функция createArrayOfNumbers(min, max)
// Вызов функции createArrayOfNumbers(1, 3) возвращает [1, 2, 3]
// Вызов функции createArrayOfNumbers(14, 17) возвращает [14, 15, 16, 17]
// Вызов функции createArrayOfNumbers(29, 34) возвращает [29, 30, 31, 32, 33, 34]
// Вызов функции createArrayOfNumbers() со случайными min и max возвращает правильный массив
// В цикле for использовался метод push

//  const add = function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//      for(let i = min;  i <= max; i++)
//     numbers.push(i);

//   // Change code above this line
//   return numbers;
// }

//  const newResyltat = add (14, 17);
//  console.log("resalt:", newResyltat)

// ---------------------------------------------------------------------------------------------------------////

// ---------------------------------------------------------------------------------------------------------////

//Напиши функцию filterArray(numbers, value), которая принимает массив чисел (параметр numbers) и возвращает новый массив,
//  в котором будут только те элементы массива numbers, которые больше чем значение параметра value(число).

// Тесты
// Объявлена функция filterArray(numbers, value)
// Вызов функции filterArray([1, 2, 3, 4, 5], 3) возвращает [4, 5]
// Вызов функции filterArray([1, 2, 3, 4, 5], 4) возвращает [5]
// Вызов функции filterArray([1, 2, 3, 4, 5], 5) возвращает []
// Вызов функции filterArray([12, 24, 8, 41, 76], 38) возвращает [41, 76]
// Вызов функции filterArray([12, 24, 8, 41, 76], 20) возвращает [24, 41, 76]
// Вызов функции filterArray() со случайным массивом и числом возвращает правильный массив
// В цикле for использовался метод push

//   const add = function filterArray(numbers, value) {
//    // Change code below this line
//       const masiv = [];
//       for (let i = 0; i < numbers.length; i += 1) {
//           console.log(numbers[i]);
//           if (numbers[i] > value) {
//               masiv.push(numbers[i]);
//           }
//       }
// return masiv;
//   // Change code above this line
// }
//   const newResyltat = add ([1, 2, 3, 4, 5], 3);
//   console.log("resalt:", newResyltat)

// ---------------------------------------------------------------------------------------------------------////

// ---------------------------------------------------------------------------------------------------------////

// Общими элементами массивов называют те элементы, которые присутствуют во всех массивах.

// Например, в двух массивах[1, 3, 5] и[0, 8, 5, 3] общими будут числа 3 и 5, т.к.они присутствуют в обоих исходных массивах.
// А числа 0, 1 и 8 присутствуют только в одном из массивов.
// Напиши функцию getCommonElements(array1, array2) которая получает два массива произвольной длины в параметры array1 и array2,
// и возвращает новый массив, состоящий из тех элементов, которые присутствуют в обоих исходных массивах.

// Тесты
// Объявлена функция getCommonElements(array1, array2)
// Вызов getCommonElements([1, 2, 3], [2, 4]) возвращает [2]
// Вызов getCommonElements([1, 2, 3], [2, 1, 17, 19]) возвращает [1, 2]
// Вызов getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) возвращает [12, 27, 3]
// Вызов getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) возвращает [10, 30, 40]
// Вызов getCommonElements([1, 2, 3], [10, 20, 30]) возвращает []
// Вызов функции getCommonElements() со случайными двумя массивами возвращает правильный массив
// В цикле for использовались методы includes и push

//    const add = function getCommonElements(array1, array2) {
//   // Change code below this line
//   const newArray = [];
//   for (const array of array1) {
//     if (array2.includes(array)) {
//       newArray.push(array);
//     }
//   }
//   return newArray
//  // Change code above this line
// }

//   const newResyltat = add ([1, 2, 3], [2, 4]);
//   console.log("resalt:", newResyltat)

// ---------------------------------------------------------------------------------------------------------////

// ---------------------------------------------------------------------------------------------------------////

// // Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех чётных чисел от start до end.
// Чётным считается число которое делится на 2 без остатка(10 % 2 === 0).

// Тесты
// Объявлена функция getEvenNumbers(start, end)
// Вызов функции getEvenNumbers(2, 5) возвращает [2, 4]
// Вызов функции getEvenNumbers(3, 11) возвращает [4, 6, 8, 10]
// Вызов функции getEvenNumbers(6, 12) возвращает [6, 8, 10, 12]
// Вызов функции getEvenNumbers(8, 8) возвращает [8]
// Вызов функции getEvenNumbers(7, 7) возвращает []
// Вызов функции getEvenNumbers() со случайными start и end возвращает правильный массив

//    const add = function getEvenNumbers(start, end) {
//    // Change code below this line
//     const newArray = [];
//        for (let i = start; i <= end; i++)
//            if ([i] % 2 === 0) {
//                newArray.push(i);
//                console.log(newArray)
//            }
// return newArray
//     // Change code above this line
//   }

//    const newResyltat = add (2, 5);
//    console.log("resalt:", newResyltat)

// ---------------------------------------------------------------------------------------------------------////

// ---------------------------------------------------------------------------------------------------------////

// Напиши функцию includes(array, value), которая делает тоже самое, что и метод массива массив.includes(значение) - проверяет,
// есть ли в массиве array значение value, возвращая true если есть и false в противном случае.
// При выполнении этой задачи в теле функции includes() нельзя использовать метод массив.includes(значение).
// Тесты
// Объявлена функция includes(array, value)
// Вызов includes([1, 2, 3, 4, 5], 3) возвращает true
// Вызов includes([1, 2, 3, 4, 5], 17) возвращает false
// Вызов includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter") возвращает true
// Вызов includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus") возвращает false
// Вызов includes(["apple", "plum", "pear", "orange"], "plum") возвращает true
// Вызов includes(["apple", "plum", "pear", "orange"], "kiwi") возвращает false
// Вызов includes() для случайного массива со случайным value возвращает верный boolean
// В функции includes используется for, return, но не метод массива includes

//    const add = function includes(array, value) {
//   // Change code below this line
// for(let i = 0; i < array.length; i += 1){
// 	if(array[i] === value){
// 		return true;}
//     }

//      return false;
//   // Change code above this line
// }

//    const newResyltat = add ([1, 2, 3, 4, 5], 3);
//    console.log("resalt:", newResyltat)

// ---------------------------------------------------------------------------------------------------------////

// ---------------------------------------------------------------------------------------------------------////

//  Если будет время решите задачку из codewars: преобразовать строку в новую строку, где каждый символ в новой строке
//  соответствует  "(", если этот символ появляется только один раз в исходной строке или ")", если этот символ появляется
//  более одного раза в исходной строке. Игнорируйте использование заглавных букв при определении дубликата символа.
//   Примеры "din"      =>  "(((";  "recede"   =>  "()()()"

// const word = 'Automobile';
// const splitedWord = word.split('');
// let decodedWord = '';

// splitedWord.forEach(x => {
//     decodedWord += splitedWord.filter(z => z === x).length > 1 ? '(' : ')';
// });

// console.log(decodedWord, 'result');

// ---------------------------------------------------------------------------------------------------------////

console.log('Modul2');
