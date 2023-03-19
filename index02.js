//TODO:===========================
// Створіть масив styles з елементами «Джаз» та «Блюз».
//Додайте "Рок-н-рол" в кінець.
// Замініть значення "Блюз" на "Класика".
//Видалить перший елемент масиву і виведіть його в консоль.
//Вставте «Реп» і «Реггі» на початок масиву.

// const styles = ["Джаз", "Блюз"];

// styles.push("Рок-н-рол");
// console.log(styles);

// styles.splice(1, 1, "Класика");
// console.log(styles);

// console.log(styles.shift());

// styles.unshift("Реп", "Реггі");
// console.log(styles);

// styles.splice(0, 0, "Реп", "Реггі");
// console.log(styles);


//______________________

//TODO:==============================
// Напишіть рішення, яке обчислює суму
// Квадратного коріння для всіх чисел у яких квадратний корінь буде цілим числом і пушити числа в новий масив.

// const arr = [4, 3, 5, 16, 16, 33, 4, 9];
// const sumArray = [];

// for (let i = 0; i < arr.length; i += 1) {
//     if (Number.isInteger(Math.sqrt(arr[i]))) {
//         sumArray.push(Math.sqrt(arr[i]));
//     }
    
// }

// console.log(sumArray)

//______________________

//TODO:==========================
//Напиши функцію findSmallerNumber(numbers)
//яка шукає найменше число в масиві.
//Додай перевірку що функція отримує масив
const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

// function findSmallerNumber(numbers) {
//     if (Array.isArray(numbers)) {
//         let min = numbers[0];
//         for (let i = 0; i < numbers.length; i += 1) {
            
//             if (numbers[i] < min) {
//                 min = numbers[i];
//             }
//         }
//         return min
//     }
//     return "No Array in parameter";
// }

// console.log(findSmallerNumber(numbers));
// function findSmallerNumber(numbers) {
//     if (Array.isArray(numbers)) {
//        numbers.sort( (a, b) => a - b)
//     }
//     return numbers[0];
// }

// console.log(findSmallerNumber(numbers));


//______________________

//TODO:==============================
// Функція formatMessage(message, maxLength)
// приймає рядок (параметр message) і форматує його,
// якщо довжина перевищує значення в параметрі maxLength.

// function formatMessage(message, maxLength) {
//     if (message.length > maxLength) {
//         return message.slice(0, maxLength) + "...";
//     }
//     return message
// }

// console.log(formatMessage("Curabitur ligula sapien", 6))
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15));

//______________________

// У вас є масив об'єктів users, кожен з яких містить інформацію про користувача, а саме його ім'я, прізвище, електронну адресу та телефон. У кожного об'єкта також є вкладений об'єкт address, який містить адресу користувача з властивостями city, state та zip.

// Треба створити новий масив об'єктів, що містять тільки ім'я, електронну адресу та назву міста користувача.Потрібно зберегти ці властивості в змінній result.

// const users = [
//   {
//     firstName: 'John',
//     lastName: 'Doe',
//     email: 'johndoe@example.com',
//     phone: '555-555-5555',
//     address: {
//       city: 'New York',
//       state: 'NY',
//       zip: '10001'
//     }
//   },
//   {
//     firstName: 'Jane',
//     lastName: 'Doe',
//     email: 'janedoe@example.com',
//     phone: '555-555-5555',
//     address: {
//       city: 'Los Angeles',
//       state: 'CA',
//       zip: '90001'
//     }
//   },
//   {
//     firstName: 'Bob',
//     lastName: 'Smith',
//     email: 'bobsmith@example.com',
//     phone: '555-555-5555',
//     address: {
//       city: 'Chicago',
//       state: 'IL',
//       zip: '60601'
//     }
//   }
// ];


// let result = users.map(({ firstName, email, address: { city } }) => ({ firstName, email, city }));
// console.log(result)


//______________________
// Нехай ми маємо об'єкт person, який містить поля name, age та gender. Ми хочемо отримати значення цих полів і зберегти їх у змінні, але з умовою, що якщо поле gender не вказано, ми хочемо присвоїти йому значення "unknown".

// const person = {
//   name: "John",
//   age: 30
// };

// const { name: newName, age: newAge, gender: newGender = "unknown" } = person;
// console.log("🚀 ~ file: index02.js:149 ~ newGender:", newGender)
// console.log("🚀 ~ file: index02.js:149 ~ newName:", newName)
//_____________________

// Треба написати  функцію getUserInfo, яка приймає об'єкт з полями name, age та address, який в свою чергу містить поля city та country. Потрібно  викликати цю функцію з об'єктом та використовувати деструктуризацію, щоб отримати значення цих полів та зберегти їх у змінні, але з умовою, що якщо поле country не вказано в об'єкті address,треба присвоїти йому значення "unknown". Після цього  повернутаємо рядок з інформацією про користувача у форматі "Name is AGE years old, living in CITY, COUNTRY.".

// const user = {
//   name: "John",
//   age: 30,
//   address: {
//     city: "Kyiv"
//   }
// };

// // function getUserInfo({ name, age, address: { country: country = "unknown", city: town } }) {
// //     return `${name} is ${age} years old, living in ${town}, ${country}.`
// // }

// const getUserInfo = ({ name, age, address: { country: country = "unknown", city: town } }) => `${name} is ${age} years old, living in ${town}, ${country}.`
// console.log(getUserInfo(user));

//_________________

//TODO:==========================
//Напишіть функції для роботи з масивом
//add(name) додає курс до кінця колекції
//removeCourse(name) видаляє курс із колекції
//updateCourse(oldName, newName) змінює ім'я на нове

// const collection = [];

// const add = function (name) {
//     collection.push(name);
// }
// add("vasya");
// add("petya");
// console.log(collection);

// const removeCourse = function (name) {
//     if (collection.indexOf(name) >= 0) {
//         collection.splice(collection.indexOf(name), 1);
//     }
//     return "Такого нет";
// }
// removeCourse("vasya");

// console.log(removeCourse("Oksana"));

// const updateCourse = (oldName, newName) => {
// if (collection.indexOf(oldName) >= 0) {
//         collection.splice(collection.indexOf(oldName), 1, newName);
//     }
    
// }
// console.log(collection);
// updateCourse("vasya", "Oksana")
// console.log("🚀 ~ file: index02.js:179 ~ collection:", collection)

