console.log('Hello mod 3');

// ---------------------------------------------------------------------------------------------------------////

//Задание
// Перебери объект apartment используя цикл for...in и запиши в массив keys все его ключи, а в массив values все значения его свойств.

// Тесты
// Объявлена переменная apartment
// Значение переменной apartment это объект
// Объявлена переменная keys
// Значение переменной keys это массив ["descr", "rating", "price"]
// Объявлена переменная values
// Значение переменной values это массив ["Spacious apartment in the city center", 4, 2153]

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for (const key in apartment) {
//   keys.push(key);
//     values.push(apartment[key]);
// }
//     console.log(keys);
//     console.log(values);

// ---------------------------------------------------------------------------------------------------------////

// ---------------------------------------------------------------------------------------------------------////

//Задание
// Напиши функцию countProps(object), которая считает и возвращает количество собственных свойств объекта в параметре object.
// Используй переменную propCount для хранения количества свойств объекта.

// Тесты
// Объявлена функция countProps(object)
// Вызов countProps({}) возвращает 0
// Вызов countProps({ name: "Mango", age: 2 }) возвращает 2
// Вызов countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) возвращает 3
// Функция подсчитывает только собственные свойства объекта

// const add =function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
// 	const propArray = Object.keys(object)
//     propCount=propArray.length
//   // Change code above this line
//   return propCount;
// }

// const newResyltat = add ({ name: "Mango", age: 2 });
//  console.log(newResyltat)

// ---------------------------------------------------------------------------------------------------------////

// ---------------------------------------------------------------------------------------------------------////

// Задание
// Перебери объект apartment используя метод Object.keys() и цикл for...of.
// Запиши в переменную keys массив ключей собственных свойств объекта apartment, и добавь в массив values все значения его свойств.

// Тесты
// Объявлена переменная apartment.
// Значение переменной apartment это объект.
// Объявлена переменная keys.
// Значение переменной keys это массив ["descr", "rating", "price"].
// Значение переменной keys получено с помощью метода Object.keys().
// Объявлена переменная values.
// Значение переменной values это массив ["Spacious apartment in the city center", 4, 2153].
// Значение переменной values получено с помощью цикла for...of.

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// for (const key of keys) {
//   values.push(apartment[key]);
// }
// console.log(values);

// ---------------------------------------------------------------------------------------------------------////

// Задание
// Выполни рефакторинг функции countProps(object) используя метод Object.keys() и, возможно, но необязательно, цикл for...of.

// Тесты
// Объявлена функция countProps(object)
// Вызов countProps({}) возвращает 0
// Вызов countProps({ name: "Mango", age: 2 }) возвращает 2
// Вызов countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) возвращает 3
// Функция подсчитывает только собственные свойства объекта
// Функция использует метод Object.keys() и, возможно, цикл for...of

// const add = function countProps(object) {
//   // Change code below this line
//   let propCount = 0;
// const keys = Object.keys(object);
//   for (const key of keys) {
//   propCount +=1
// }

//   return propCount;
//   // Change code above this line
// }

// const newResyltat = add({ name: "Mango", age: 2 });
// console.log("Resyltat:", newResyltat)

// ---------------------------------------------------------------------------------------------------------////

// ---------------------------------------------------------------------------------------------------------////

// Задача. Расходы на зарплату
// Задание
// Напиши функцию countTotalSalary(salaries) которая принимает объект зарплат, где имя свойства это имя сотрудника,
// а значение свойства это зарплата.Функция должна рассчитать общую сумму зарплат сотрудников и вернуть её.Используй
// переменную totalSalary для хранения общей суммы зарплаты.

// Тесты
// Объявлена функция countTotalSalary(salaries)
// Вызов countTotalSalary({}) возвращает 0
// Вызов countTotalSalary({ mango: 100, poly: 150, alfred: 80 }) возвращает 330
// Вызов countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }) возвращает 400
// Функция учитывает только собственные свойства объекта

// const add = function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
// 	const values = Object.values(salaries);
//   	for (const value of values) {
//     totalSalary += value;
//     }
//   // Change code above this line
//   return totalSalary;
// }
//  const newResyltat = add({ kiwi: 200, poly: 50, ajax: 150 });
//  console.log("Resyltat:", newResyltat)

// ---------------------------------------------------------------------------------------------------------////

// ---------------------------------------------------------------------------------------------------------////

// Перебери массив объектов colors используя цикл for...of. Добавь в массив hexColors значения свойств hex,
// а в массив rgbColors значения свойств rgb из всех объектов массива colors.

// Тесты
// Объявлена переменная colors
// Значение переменной colors это массив
// Объявлена переменная hexColors
// Значение переменной hexColors это массив ["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]
// Объявлена переменная rgbColors
// Значение переменной rgbColors это массив ["244,67,54", "33,150,243", "76,175,80", "255,235,59"]

// const colors = [
//     { hex: '#f44336', rgb: '244,67,54' },
//     { hex: '#2196f3', rgb: '33,150,243' },
//     { hex: '#4caf50', rgb: '76,175,80' },
//     { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const color of colors) {
//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);

// ---------------------------------------------------------------------------------------------------------////

// ---------------------------------------------------------------------------------------------------------////
// Задание
// Напиши функцию getProductPrice(productName) которая принимает один параметр productName - название продукта.
// Функция ищет объект продукта с таким именем(свойство name) в массиве products и возвращает его цену(свойство price).
// Если продукт с таким названием не найден, функция должна возвращать null.

// Тесты
// Объявлена функция getProductPrice(productName).
// Вызов getProductPrice("Radar") возвращает 1300.
// Вызов getProductPrice("Grip") возвращает 1200.
// Вызов getProductPrice("Scanner") возвращает 2700.
// Вызов getProductPrice("Droid") возвращает 400.
// Вызов getProductPrice("Engine") возвращает null.

// const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
// ];

// const add = function getProductPrice(productName) {
//     // Change code below this line
//     let price = null;
//     for (const product of products) {
//         console.log(product.name);

//         if (product.name === productName) {
//             price = product.price;
//         }
//     }
//     return price;

//     // Change code above this line
// };
// const newResyltat = add('Scanner');
// console.log('Resyltat:', newResyltat);

// ---------------------------------------------------------------------------------------------------------////

// ---------------------------------------------------------------------------------------------------------////
// Задание
// Напиши функцию getAllPropValues(propName) которая принимает один параметр propName - имя(ключ) свойства.
//  Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта в массиве products.
//  Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.

// Тесты
// Объявлена функция getAllPropValues(propName)
// Вызов getAllPropValues("name") возвращает ["Radar", "Scanner", "Droid", "Grip"]
// Вызов getAllPropValues("quantity") возвращает [4, 3, 7, 9]
// Вызов getAllPropValues("price") возвращает [1300, 2700, 400, 1200]
// Вызов getAllPropValues("category") возвращает[]

// const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
// ];

// const Fn = function getAllPropValues(propName) {
//     // Change code below this line
//     const newMasyv = [];
//     for (const product of products) {
//         console.log(Object.values(product));
//         if (product.hasOwnProperty(propName)) {
//             newMasyv.push(product[propName]);
//         }
//     }
//     return newMasyv;
// };

// const newResyltat = Fn('name');
// console.log('Resyltat:', newResyltat);

// ---------------------------------------------------------------------------------------------------------////
// ---------------------------------------------------------------------------------------------------------////
// Задание
// Напиши функцию calculateTotalPrice(productName) которая принимает один параметр productName - название товара.
// Функция должна вернуть общую стоимость(цена * количество) товара с таким именем из массива products.

// Тесты
// Объявлена функция calculateTotalPrice(productName)
// Вызов calculateTotalPrice("Blaster") возвращает 0
// Вызов calculateTotalPrice("Radar") возвращает 5200
// Вызов calculateTotalPrice("Droid") возвращает 2800
// Вызов calculateTotalPrice("Grip") возвращает 10800
// Вызов calculateTotalPrice("Scanner") возвращает 8100

// const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
// ];

// const Fn = function calculateTotalPrice(productName) {
//     // Пиши код ниже этой строки
//     let total = 0;
//     for (const product of products) {
//         console.log(product);
//         if (product.name === productName) {
//             total = product.price * product.quantity;
//         }
//     }
//     return total;
//     // Пиши код выше этой строки
// };

// const newResyltat = Fn('Radar');
// console.log('Resyltat:', newResyltat);
// ---------------------------------------------------------------------------------------------------------////

// ---------------------------------------------------------------------------------------------------------////
// В прогнозе максимальных температур также может быть необязательное свойство icon - иконка погоды.
// Замени объявления переменных yesterday, today, tomorrow и icon одной операцией деструктуризации свойств объекта highTemperatures.
// Задай значение по умолчанию для icon - строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// Тесты
// Объявлена переменная highTemperatures
// Значение переменной highTemperatures это объект
// Объявлена переменная highTemperatures
// Значение переменной highTemperatures это объект
// Объявлена переменная yesterday с помощью деструктуризации
// Значение переменной yesterday это число 28
// Объявлена переменная today с помощью деструктуризации
// Значение переменной today это число 26
// Объявлена переменная tomorrow с помощью деструктуризации

// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
// };
// // Change code below this line
// const {
//     yesterday,
//     today,
//     tomorrow,
//     icon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
// } = highTemperatures;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(meanTemperature);

// ---------------------------------------------------------------------------------------------------------////

// ---------------------------------------------------------------------------------------------------------////
// Задание
// В переменных firstGroupScores, secondGroupScores и thirdGroupScores хранятся результаты тестирования отдельных групп.
// Используя распыление дополни код так, чтобы:

// В переменной allScores хранился массив всех результатов от первой до третьей группы.
// В переменной bestScore был самый высокий общий балл.
// В переменной worstScore был самый низкий общий балл.

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);
// console.log(allScores);
// console.log(bestScore);
// console.log(worstScore);

// ---------------------------------------------------------------------------------------------------------////

// ---------------------------------------------------------------------------------------------------------////
// Задание
// Напиши функцию makeTask(data) которая принимает один параметр data - объект со следующими свойствами.

// text - текст задачи.
// category - категория задачи.
// priority - приоритет задачи.
// Функция должна составить и вернуть новый объект задачи, не изменяя напрямую параметр data.
// В новом объекте должно быть свойство completed, значение которого хранится в одноимённой локальной переменной.

// В параметре data гарантированно будет только свойство text, а остальные два, category и priority, могут отсутствовать.
// Тогда, в новом объекте задачи, в свойствах category и priority должны быть значения по умолчанию, хранящиеся в одноимённых локальных переменных.

// Тесты
// Объявлена функция makeTask(data)
// Вызов makeTask({}) возвращает { category: "General", priority: "Normal", completed: false }
// Вызов makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }) возвращает { category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }
// Вызов makeTask({ category: "Finance", text: "Take interest" }) возвращает { category: "Finance", priority: "Normal", text: "Take interest", completed: false }
// Вызов makeTask({ priority: "Low", text: "Choose shampoo" }) возвращает { category: "General", priority: "Low", text: "Choose shampoo", completed: false }
// Вызов makeTask({ text: "Buy bread" }) возвращает { category: "General", priority: "Normal", text: "Buy bread", completed: false }

// const Fn = function makeTask(data) {
//     const completed = false;
//     const category = 'General';
//     const priority = 'Normal';
//     // Change code below this line
//     const newArr = {
//         category: 'General',
//         priority: 'Normal',
//         completed: false,
//         ...data,
//         completed: false,
//     };

//     return newArr;
//     // Change code above this line
// };
// // const newResyltat = Fn({ category: 'Homemade', priority: 'Low', text: 'Take out the trash' });
// // console.log('Resyltat:', newResyltat);
// const newResyltat = Fn({});
// console.log('Resyltat:', newResyltat);
// ---------------------------------------------------------------------------------------------------------////

// ---------------------------------------------------------------------------------------------------------////
// Используя операцию rest дополни код функции add() так, чтобы она принимала любое количество аргументов, считала и возвращала их сумму.

// Тесты
// Объявлена функция add
// Функция add использует параметр args
// Для сбора аргументов в переменную args, в подписи функции используется синтаксис ... (оперетор rest)
// Вызов add(15, 27) возвращает 42
// Вызов add(12, 4, 11, 48) возвращает 75
// Вызов add(32, 6, 13, 19, 8) возвращает 78
// Вызов add(74, 11, 62, 46, 12, 36) возвращает 241

// Change code below this line
// const Fn = function add(...args) {
//     console.log(args);
//     let total = 0;
//     for (const arg of args) {
//         total += arg;
//     }
//     return total;
// };
// const newResyltat = Fn(12, 4, 11, 48);
// console.log('Resyltat:', newResyltat);

// ---------------------------------------------------------------------------------------------------------////

// ---------------------------------------------------------------------------------------------------------////
// Задание
// Функция addOverNum() считает сумму всех аргументов.Измени параметры и тело функции addOverNum() так,чтобы она считала сумму только тех аргументов,
// которые больше чем заданное число.
// Это число должно быть первым параметром функции.

// Тесты
// Объявлена функция addOverNum()
// Вызов addOverNum(50, 15, 27) возвращает 0
// Вызов addOverNum(10, 12, 4, 11, 48, 10, 8) возвращает 71
// Вызов addOverNum(15, 32, 6, 13, 19, 8) возвращает 51
// Вызов addOverNum(20, 74, 11, 62, 46, 12, 36) возвращает 218

// const Fn = function addOverNum(firstNumber, ...args) {
//     let total = 0;

//     for (const arg of args) {
//         if (arg > firstNumber) {
//             total += arg;
//         }
//     }

//     return total;
// };
// const newResyltat = Fn(10, 12, 4, 11, 48, 10, 8);
// console.log('Resyltat:', newResyltat);
// ---------------------------------------------------------------------------------------------------------////
// ---------------------------------------------------------------------------------------------------------////
// Задание
// Функция findMatches() принимает произвольное количество аргументов.Первым аргументом всегда будет массив чисел,
// а остальные аргументы будут просто числами.Дополни код функции так, чтобы она возвращала новый массив matches,
// в котором будут только те аргументы, начиная со второго, которые есть в массиве первого аргумента.

// Например, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) должна вернуть массив [1, 2], потому что только они есть в массиве первого аргумента.

// Тесты
// Объявлена функция findMatches()
// Вызов findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) возвращает [1, 2]
// Вызов findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2) возвращает [17, 89, 2]
// Вызов findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41) возвращает [24, 9, 41]
// Вызов findMatches([63, 11, 8, 29], 4, 7, 16) возвращает []

// const Fn = function findMatches(arr1, ...arr2) {
//     const matches = []; // Don't change this line
//     matches.push(...arr2.filter(el => arr1.includes(el)));

//     return matches;
// };
// const newResyltat = Fn([1, 2, 3, 4, 5], 1, 8, 2, 7);
// console.log('Resyltat:', newResyltat);
// ---------------------------------------------------------------------------------------------------------////
// ---------------------------------------------------------------------------------------------------------////
// ---------------------------------------------------------------------------------------------------------////
// ---------------------------------------------------------------------------------------------------------////
// ---------------------------------------------------------------------------------------------------------////

console.log('Modul3');
