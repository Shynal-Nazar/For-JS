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
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const color of colors) {
// hexColors.push(color.hex);
// rgbColors.push(color.rgb);
// }
  
// console.log(hexColors);
// console.log(rgbColors);

// ---------------------------------------------------------------------------------------------------------////

// ---------------------------------------------------------------------------------------------------------////



// ---------------------------------------------------------------------------------------------------------////

// ---------------------------------------------------------------------------------------------------------////



// ---------------------------------------------------------------------------------------------------------////
// ---------------------------------------------------------------------------------------------------------////



// ---------------------------------------------------------------------------------------------------------////

// ---------------------------------------------------------------------------------------------------------////



// ---------------------------------------------------------------------------------------------------------////

// ---------------------------------------------------------------------------------------------------------////



// ---------------------------------------------------------------------------------------------------------////

// ---------------------------------------------------------------------------------------------------------////


// ---------------------------------------------------------------------------------------------------------////

// ---------------------------------------------------------------------------------------------------------////




// ---------------------------------------------------------------------------------------------------------////

// ---------------------------------------------------------------------------------------------------------////


// ---------------------------------------------------------------------------------------------------------////



console.log('Modul3');