console.log('Hello mod 4');

// ---------------------------------------------------------------------------------------------------------////

// Задание
// Дополни код так, чтобы в переменной result был результат выполнения функции makePizza, а в переменной pointer была ссылка на функцию makePizza.

// Тесты
// Объявлена функция makePizza
// Объявлена переменная result
// Значение переменной result это строка "Your pizza is being prepared, please wait."
// Значение переменной result получено с помощью вызова функции
// Объявлена переменная pointer
// Значение переменной pointer это ссылка на функцию makePizza

// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }
// // Change code below this line

// const result = makePizza();
// const pointer = (makePizza);

// ---------------------------------------------------------------------------------------------------------////
// Задание
// Дополни функцию makeMessage так, чтобы она ожидала вторым параметром(параметр callback) колбэк - функцию и возвращала ее вызов.
// Функция deliverPizza или makePizza будет передаваться как колбэк и ожидать аргументом имя готовой доставляемой пиццы.

// Тесты
// Объявлена функция deliverPizza
// Объявлена функция makePizza
// Объявлена функция makeMessage
// Функция makeMessage принимает два параметра, названые согласно задания, pizzaName и callback
// Вызов makeMessage("Royal Grand", makePizza) возвращает строку "Pizza Royal Grand is being prepared, please wait..."
// Вызов makeMessage("Ultracheese", deliverPizza) возвращает строку "Delivering Ultracheese pizza."

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {

//   return callback(pizzaName, callback);
// }

// ---------------------------------------------------------------------------------------------------------////
// Задание
// Дополни функцию getTotalBalanceByGender(users, gender) так, чтобы она возвращала общий баланс пользователей
// (свойство balance), пол которых(свойство gender) совпадает со значением параметра gender.
// const users = [
//     {
//         name: 'Moore Hensley',
//         email: 'moorehensley@indexia.com',
//         eyeColor: 'blue',
//         friends: ['Sharron Pace'],
//         isActive: false,
//         balance: 2811,
//         gender: 'male',
//     },
//     {
//         name: 'Sharlene Bush',
//         email: 'sharlenebush@tubesys.com',
//         eyeColor: 'blue',
//         friends: ['Briana Decker', 'Sharron Pace'],
//         isActive: true,
//         balance: 3821,
//         gender: 'female',
//     },
//     {
//         name: 'Ross Vazquez',
//         email: 'rossvazquez@xinware.com',
//         eyeColor: 'green',
//         friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//         isActive: false,
//         balance: 3793,
//         gender: 'male',
//     },
//     {
//         name: 'Elma Head',
//         email: 'elmahead@omatom.com',
//         eyeColor: 'green',
//         friends: ['Goldie Gentry', 'Aisha Tran'],
//         isActive: true,
//         balance: 2278,
//         gender: 'female',
//     },
//     {
//         name: 'Carey Barr',
//         email: 'careybarr@nurali.com',
//         eyeColor: 'blue',
//         friends: ['Jordan Sampson', 'Eddie Strong', 'Adrian Cross'],
//         isActive: true,
//         balance: 3951,
//         gender: 'male',
//     },
//     {
//         name: 'Blackburn Dotson',
//         email: 'blackburndotson@furnigeer.com',
//         eyeColor: 'brown',
//         friends: ['Jacklyn Lucas', 'Linda Chapman', 'Adrian Cross', 'Solomon Fokes'],
//         isActive: false,
//         balance: 1498,
//         gender: 'male',
//     },
//     {
//         name: 'Sheree Anthony',
//         email: 'shereeanthony@kog.com',
//         eyeColor: 'brown',
//         friends: ['Goldie Gentry', 'Briana Decker'],
//         isActive: true,
//         balance: 2764,
//         gender: 'female',
//     },
// ];
// const gender = 'male';
// // Change code below this line

// const arr = users
//     .filter(user => user.gender === gender)
//     .map(userBalance => userBalance.balance)
//     .reduce((previousValue, number) => {
//         return previousValue + number;
//     }, 0);

// console.log(arr);

// ---------------------------------------------------------------------------------------------------------////
// Задание
// Дополни второй вызов функции makePizza(pizzaName, callback), передав вторым аргументом инлайн колбэк - функцию
// eatPizza(pizzaName), которая логирует строку "Eating pizza <имя пиццы>".

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza("Ultracheese", function eatPizza(pizzaName)
// {console.log(`Eating pizza ${pizzaName}.`);
// });
// ---------------------------------------------------------------------------------------------------------////
// Задание
// Необходимо написать логику обработки заказа пиццы.Выполни рефакторинг метода order так, чтобы он принимал вторым
//  и третим параметрами два колбэка onSuccess и onError.

// Если в свойстве pizzas нет пиццы с названием из параметра pizzaName, метод order должен возвращать результат
//  вызова колбэка onError, передавая ему аргументом строку "There is no pizza with a name <имя пиццы> in the assortment."
// Если в свойстве pizzas есть пицца с названием из параметра pizzaName, метод order должен возвращать результат
// вызова колбэка onSuccess, передавая ему аргументом имя заказанной пиццы.
// После объявления объекта pizzaPalace мы добавили колбэки и вызовы методов.Пожалуйста ничего там не меняй.

// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, onSuccess, onError) {
//   if(this.pizzas.includes(pizzaName)){
//      return onSuccess(pizzaName)}
//     return onError(`There is no pizza with a name ${pizzaName} in the assortment.`)
//   }
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order('Smoked', makePizza, onOrderError);
// pizzaPalace.order('Four meats', makePizza, onOrderError);
// pizzaPalace.order('Big Mike', makePizza, onOrderError);
// pizzaPalace.order('Vienna', makePizza, onOrderError);

// ---------------------------------------------------------------------------------------------------------////
// Задание
// Функция calculateTotalPrice(orderedItems) принимает один параметр orderedItems - массив чисел, и рассчитывает
// общую сумму его элементов, которая сохраняется в переменной totalPrice и возвращается как результат работы функции.

// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

//     function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

//   orderedItems.forEach( value => (totalPrice += value))

//   // Change code above this line
//   return totalPrice;
// }
// ---------------------------------------------------------------------------------------------------------////
// Задание
// Функция filterArray(numbers, value) принимает массив чисел numbers и возвращает новый массив, в котором будут
// только те элементы оригинального массива, которые больше чем значение параметра value.

// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.
//     function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//   numbers.forEach(number => {
//   if(number > value){
//   filteredNumbers.push(number)}
//   })

//   // Change code above this line
//   return filteredNumbers;
// }
// ---------------------------------------------------------------------------------------------------------////
// Задание
// Функция getCommonElements(firstArray, secondArray) принимает два массива произвольной длины в параметры firstArray
// и secondArray, и возвращает новый массив их общих элементов, то есть тех которые есть в обоих массивах.

// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.
//     function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line
//   firstArray.forEach(velue =>{
//   if (secondArray.includes(velue)) {
//       commonElements.push(velue);}
//   })

//   return commonElements;
//   // Change code above this line
// }
// ---------------------------------------------------------------------------------------------------------////
// Задание
// Функция changeEven(numbers, value) принимает массив чисел numbers и обновляет каждый элемент, значение которого
// это чётное число, добавляя к нему значение параметра value.

// Выполни рефакторинг функции так, чтобы она стала чистой - не изменяла массив чисел numbers, а создавала, наполняла
// и возвращала новый массив с обновлёнными значениями.

//     function changeEven(numbers, value) {
//   // Change code below this line
//   const newArray = [];
//   numbers.forEach(element => {
//     (element % 2 === 0) ? newArray.push(element + value) : newArray.push(element)
//   })
// return newArray;
//   // Change code above this line
// }

// ---------------------------------------------------------------------------------------------------------////
// Задание
// Используя метод map() сделай так, чтобы в переменной titles получился массив названий книг(свойство title)
// из всех объектов массива books.
//     const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const titles = books.map(book=>book.title);
// ---------------------------------------------------------------------------------------------------------////
// Задание
// Дополни код так, чтобы в переменной evenNumbers получился массив чётных чисел из массива numbers, а в переменной
// oddNumbers массив нечётных.Обязательно используй метод filter().

//     const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter(value => value % 2 === 0);
// const oddNumbers = numbers.filter(value => value % 2 !== 0);

// ---------------------------------------------------------------------------------------------------------////
// Задание
// Дополни код так, чтобы в переменной allGenres был массив всех жанров книг(свойство genres) из массива books,
// а в переменной uniqueGenres массив уникальных жанров - без повторений.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap(book => book.genres);
// const uniqueGenres = allGenres.filter((Genre, index, array) => array.indexOf(Genre)=== index);
// ---------------------------------------------------------------------------------------------------------////
// Задание
// Используя метод filter() дополни код так, чтобы:

// В переменной topRatedBooks получился массив книг рейтинг которых(свойство rating) больше либо
// равно значению переменной MIN_RATING.
// В переменной booksByAuthor получился массив книг написанных автором с именем(свойство author)
// которое совпадает со значением в переменной AUTHOR.
//     const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);
// ---------------------------------------------------------------------------------------------------------////
// ---------------------------------------------------------------------------------------------------------////
// Дополни функцию getUsersWithEyeColor(users, color) так, чтобы она возвращала массив пользователей у которых цвет
// глаз(свойство eyeColor) совпадает со значением параметра color.

// [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]

// const getUsersWithEyeColor = (users, color) => {
// return users.filter(user => user.eyeColor === color)

// };

// ---------------------------------------------------------------------------------------------------------////
// ---------------------------------------------------------------------------------------------------------////
// Задание
// Дополни функцию getUsersWithAge(users, minAge, maxAge) так, чтобы она возвращала массив пользователей,
//     возраст которых(свойство age) попадает в промежуток от minAge до maxAge.

//  const getUsersWithAge = (users, minAge, maxAge) => {
//  return users.filter(user => user.age > minAge && user.age < maxAge)

// };
// ---------------------------------------------------------------------------------------------------------////
// ---------------------------------------------------------------------------------------------------------////
// Задание
// Дополни функцию getUsersWithFriend(users, friendName) так, чтобы она возвращала массив пользователей у которых
// есть друг с именем в параметре friendName.Массив друзей пользователя хранится в свойстве friends.
// const getUsersWithFriend = (users, friendName) => {
//   return  users.filter(user => user.friends.includes(friendName))
// };
// ---------------------------------------------------------------------------------------------------------////
// ---------------------------------------------------------------------------------------------------------////
// Задание
// Дополни функцию getFriends(users) так, чтобы она возвращала массив друзей всех пользователей(свойство friends).
//  У нескольких пользователей могут быть одинаковые друзья, сделай так чтобы возвращаемый массив не содержал повторений.
//      const getFriends = (users) => {
//   const allFriends = users.flatMap(user => user.friends);
//   return allFriends.filter(
//   (user, index, array) => array.indexOf(user) === index)
// };
// ---------------------------------------------------------------------------------------------------------////
// ---------------------------------------------------------------------------------------------------------////
// Задание
// Дополни функцию isEveryUserActive(users) так, чтобы она проверяла все ли пользователи сейчас активны(свойство isActive)
// и возвращала true или false.

//     const isEveryUserActive = (users) => {
//   return users.every(user => user.isActive)
// };
// ---------------------------------------------------------------------------------------------------------////
// ---------------------------------------------------------------------------------------------------------////
// Задание
// Игровому сервису необходим функционал подсчёта среднего времени проведённого в играх.Дополни код так, чтобы в
//  переменной totalPlayTime получилось общее игровое время из массива playtimes.
//   const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line

// const totalPlayTime = playtimes.reduce((previousValue, element) => previousValue + element);

// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;
// ---------------------------------------------------------------------------------------------------------////
// ---------------------------------------------------------------------------------------------------------////
// Задание
// Нашему сервису необходимо рассчитать среднее время проведённое в одной игре для каждого игрока, и получить общую
// сумму этих времён.Рассчитать время для каждого из игроков, можно разделив его время(свойство playtime) на
// количество игр(свойство gamesPlayed).
//   const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((total, player) => total + player.playtime / player.gamesPlayed, 0);
// ---------------------------------------------------------------------------------------------------------////
// ---------------------------------------------------------------------------------------------------------////
// Задание
// Дополни функцию calculateTotalBalance(users) так, чтобы она считала и возвращала сумму всех средств
// (свойство balance) которые хранят пользователи из массива users.
//  const calculateTotalBalance = users => {
//   return users.reduce((acc, user) => acc + user.balance, 0)
// };
// ---------------------------------------------------------------------------------------------------------////
// ---------------------------------------------------------------------------------------------------------////
// Задание
// Дополни функцию getTotalFriendCount(users) так, чтобы она считала и возвращала общее количество друзей
//     (свойство friends) всех пользователей из массива users.
//         const getTotalFriendCount = users => {
//    return users.reduce((acc, user) => acc + user.friends.length,0)
// };
// ---------------------------------------------------------------------------------------------------------////
// ---------------------------------------------------------------------------------------------------------////
// Задание
// Дополни код так, чтобы в переменной ascendingReleaseDates получилась отсортированная по возрастанию копия массива
// releaseDates, а в переменной alphabeticalAuthors копия массива имён авторов authors отсортированная в по алфавиту.
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors = [...authors].sort();
// ---------------------------------------------------------------------------------------------------------////
// ---------------------------------------------------------------------------------------------------------////
// Задание
// Онлайн бибилиотеке необходимо отображать книги сортированные по дате издания, по её возрастанию или убыванию.
// Дополни код так, чтобы в переменной ascendingReleaseDates получилась отсортированная по возрастанию копия массива
// releaseDates, а в переменной descendingReleaseDates копия отсортированная по убыванию.
//     const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort((a,b) => a-b);

// const descendingReleaseDates = [...releaseDates].sort((a,b)=> b-a);
// ---------------------------------------------------------------------------------------------------------////
// ---------------------------------------------------------------------------------------------------------////
// Задание
// Онлайн бибилиотеке необходимо отображать книги отсортированные по автору, в алфавитном и обратном алфавитном порядке.
// Дополни код так, чтобы в переменной authorsInAlphabetOrder получилась отсортированная по алфавиту копия массива
// authors, а в переменной authorsInReversedOrder копия отсортированная в обратном алфавитном порядке.
//  const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
//   "Howard Lovecraft",
// ];
// // Change code below this line

// const authorsInAlphabetOrder = [...authors].sort((a,b)=> a.localeCompare(b));

// const authorsInReversedOrder = [...authors].sort((a,b)=> b.localeCompare(a));
// ---------------------------------------------------------------------------------------------------------////
// ---------------------------------------------------------------------------------------------------------////
// Задание
// Дополни код так, чтобы:

// В переменной sortedByAuthorName получился массив книг отсортированный по имени автора в алфавитном порядке.
// В переменной sortedByReversedAuthorName получился массив книг отсортированный по имени автора в обратном алфавитном порядке.
// В переменной sortedByAscendingRating получился массив книг отсортированный по возрастанию рейтинга.
// В переменной sortedByDescentingRating получился массив книг отсортированный по убыванию рейтинга.
//     const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const sortedByAuthorName = [...books].sort((a,b)=>a.author.localeCompare(b.author));

// const sortedByReversedAuthorName = [...books].sort((a,b)=>b.author.localeCompare(a.author));

// const sortedByAscendingRating = [...books].sort((a,b)=>a.rating - b.rating);

// const sortedByDescentingRating = [...books].sort((a,b)=>b.rating - a.rating);
// // ---------------------------------------------------------------------------------------------------------////
// ---------------------------------------------------------------------------------------------------------////
// Задание
// Дополни функцию sortByAscendingBalance(users) так, чтобы она возвращала массив пользователей отсортированный
// по возрастанию их баланса(свойство balance).
//     const sortByAscendingBalance = users => {
//    return users.sort((a, b) => a.balance - b.balance)
// };
// ---------------------------------------------------------------------------------------------------------////
// ---------------------------------------------------------------------------------------------------------////
// Задание
// Дополни функцию sortByDescendingFriendCount(users) так, чтобы она возвращала массив пользователей отсортированный
//  по убыванию количества их друзей(свойство friends).
//    const sortByDescendingFriendCount = users => {
//   return [...users].sort((a, b) => b.friends.length - a.friends.length)
// };
// ---------------------------------------------------------------------------------------------------------////
// ---------------------------------------------------------------------------------------------------------////
// Задание
// Дополни функцию sortByName(users) так, чтобы она возвращала массив пользователей отсортированный по их имени
//     (свойство name) в алфавитном порядке.
//         const sortByName = users => {
//   return [...users].sort((a,b)=> a.name.localeCompare(b.name))
// };
// ---------------------------------------------------------------------------------------------------------////
// ---------------------------------------------------------------------------------------------------------////
// Задание
// Дополни код так, чтобы в переменной names получился массив имён авторов в алфавитном порядке, рейтинг книг
//  которых больше значения переменной MIN_BOOK_RATING.
//      const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = [...books]
//     .sort((a, b) => a.author.localeCompare(b.author))
//     .filter(value => value.rating > MIN_BOOK_RATING)
//     .map(poet => poet.author);
// ---------------------------------------------------------------------------------------------------------////
// ---------------------------------------------------------------------------------------------------------////
// Задание
// Дополни функцию getNamesSortedByFriendCount(users) так, чтобы она возвращала массив имён пользователей
// отсортированный по возрастанию количества их друзей(свойство friends).
//     const getNamesSortedByFriendCount = users => {
//    return [...users].sort((a, b) => a.friends.length - b.friends.length).map(user => user.name);
// };
// ---------------------------------------------------------------------------------------------------------////
// ---------------------------------------------------------------------------------------------------------////
// Задание
// Дополни функцию getSortedFriends(users) так, чтобы она возвращала массив уникальных имён друзей(свойство friends)
//  отсортированный по алфавиту.
//      const getSortedFriends = users => {
//   return users
//     .flatMap(user => user.friends)
//     .filter((user, index, array) => array.indexOf(user) === index)
//     .sort((a, b) => a.localeCompare(b));
// };
// ---------------------------------------------------------------------------------------------------------////
// ---------------------------------------------------------------------------------------------------------////
// Задание
// Дополни функцию getTotalBalanceByGender(users, gender) так, чтобы она возвращала общий баланс пользователей
//     (свойство balance), пол которых(свойство gender) совпадает со значением параметра gender.
//         const getTotalBalanceByGender = (users, gender) => {
//    return users
//     .filter(user => user.gender === gender)
//     .map(userBalance => userBalance.balance)
//     .reduce((previousValue, number) => {
//         return previousValue + number;
//     }, 0);
// };
// ---------------------------------------------------------------------------------------------------------////

console.log('Modul4');
