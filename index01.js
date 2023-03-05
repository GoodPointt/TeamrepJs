//TODO:===================================
// У змінній min лежить число від 0 до 59. Визначте у котру чверть години
// Попадає це число (у першу, другу, третю або четверту).

// let min = 30;
// if (min <= 15) {
//   console.log("1а чверть");
// } else if (15 <= min && min <= 30) {
//   console.log("2а чверть");
// } else if (30 <= min && min <= 45) {
//   console.log("3а чверть");
// } else {
//   console.log("4а чверть");
// }

// Використовуючи функцію if...else,
// напишіть код, який запитуватиме:
// "Яка офіційна назва JavaScript?"
// Якщо користувач вводить "ECMAScript",
// то показати через alert: "Вірно!"
// інакше відобразити:"Не знаєте? ECMAScript!"

// let string = prompt("Яка офіційна назва JavaScript?");

// if (string === "ECMAScript") {
//   alert("Вірно!");
// } else {
//   alert("Не знаєте? ECMAScript!");
// }

// Напишіть програму, яка отримає від користувача
//число (кількість хвилин) і виведе у консоль
//Рядок у форматі годин і хвилин
// 70 === 01:10
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart

// let minutes = Number(prompt("Enter minutes to format"));
// let hours = Math.floor(minutes / 60);
// let minuteFormat = minutes - hours * 60;
// minuteFormat = String(minuteFormat).padStart(2, "0");
// hours = String(hours).padStart(2, "0");
// alert(`${hours}:${minuteFormat}`);


// Напишіть цикл, який виводить у консоль числа від max до min за спаданням
//  Виведіть у консоль  усіх парних чисел від min до max


// const max = 50;
// const min = 23;

// // часть 1

// for (let i = max; i >= min; i -= 1) {
//     // console.log(i);
//     if (i % 2 === 0) {
//         console.log(`Четное:`, i);
//     }
// }
//_____________________________________

// Напишіть код, який запитуватиме
// Логін за допомогою prompt і логувати результат
// В консоль браузера

// Якщо відвідувач вводить "Адмін",
// то prompt запитує пароль.
// Якщо нічого не ввели або натиснута клавіша Esc
// Вивести рядок "Скасовано"
//  Інакше вивести рядок "Я вас не знаю"

// Пароль перевіряти так:
// Якщо введено пароль "Я головний", то вивести рядок "Здрастуйте!"
// інакше виводити рядок "Невірний пароль!"

// const login = prompt("Логін");

// console.log(login);

// if (login === "Админ") {
//     let password = prompt("Пароль");
//     if (!password) { console.log("Скасовано"); }
//     else {
//         switch (password) {
//             case "Я головний": {
//                 console.log("Здрастуйте!");
//                 break;
//             }
//             default: {
//                 console.log("Невірний пароль!");
//             }
//         }
//      }
// } else {
//     console.log("Я вас не знаю");
// }
// const login = prompt("Логін");

// console.log(login);
// if (login === "Админ") {
//     let password = prompt("Пароль");
//     if (!password) { console.log("Скасовано"); }
//     else {
//         console.log(password === "Я головний" ? "Здрастуйте!" : "Невірний пароль!");
//     }
     
// } else {
//     console.log("Я вас не знаю");
// }
//______________________________________________


// При завантаженні сторінки користувачеві пропонується
// В prompt ввести число. Введення додається до значення
// Змінної total.
// Операція введення числа триває до того часу,
// Поки користувач не натисне кнопку Cancel в prompt.
// Після того, як користувач припинив введення натиснувши накнопку Cancel, показати alert з рядком "Загальна сума введених чисел дорівнює [число]."
// Робити перевірку,що користувач ввів саме число, а не довільний набір символів не потрібно.

// let total = 0;
// let number = Number(prompt("Введи число", 0));

// do {
//     total += number;
//     number = Number(prompt("Введи число", 0));
// } while (number);

// alert(`Загальна сума введених чисел дорівнює ${total}`);


// Напишіть цикл, який пропонує ввести число більше 100 через prompt.
// Якщо відвідувач ввів інше число - попросити
// Ввести ще раз і так далі.
// Цикл повинен запитувати число, поки відвідувач не введе число більше 100, або натисне кнопку
// Скасування в prompt


// let ourNumber;

// do {
//     ourNumber = Number(prompt("Введи число"));
//      }
// } while (ourNumber < 100)

// let ourNumber = Number(prompt("Введи число"));

// while (ourNumber < 100){
//     ourNumber = Number(prompt("Введи число"));
   
// }

//TODO:===================================
//Даний рядок, що складається із символів, наприклад, 'abcde'.
// Перевірте, що першим символом цього рядка є буква 'a'.
// Якщо це так - виведіть 'так', інакше виведіть 'ні'.

// const string = "abcde";

// // if (string.indexOf("a"))

// if (string[0] === "a") {
//   console.log("Yes");
// } else {
//   console.log("No");
// }

//TODO:===================================
// Напишіть if..else, що відповідає наступному switch:

// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }
// const browser = "dfg";
// if (browser === 'Edge') {
//   console.log( "You've got the Edge!" );
// } else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera'){
//   console.log('Okay we support these browsers too');
// } else {console.log("We hope that this page looks ok!")}
//____________________________

// Напишіть через свіч пошуку автора мови програмування
//  пишемо назву мови у шаблонному рядку отримує відповідь мова та автор
//  PHP Расмус Лердорф
//  C# група інженерів компанії Microsoft під керівництвом Андерса Хейлсберга та Скотта Вільтаумота
//  Swift Кріс Латтнер
//  JS Брендан Ейх
//  Java Джеймс Гослінг
//  Python Гвідо ван Россум

// let lang = "Python";
// const autors = ["Расмус Лердорф", "Андерса Хейлсберга та Скотта Вільтаумота", "Кріс Латтнер", "Брендан Ейх", "Джеймс Гослінг", "Гвідо ван Россум"];

// switch(lang) {
//   case "PHP": console.log(`Languge ${lang} was created by ${autors[0]}`);
//         break;
//   case "C#": console.log(`Languge ${lang} was created by ${autors[1]}`);
//         break;
//   case "Swift": console.log(`Languge ${lang} was created by ${autors[2]}`);
//         break;
//   case "JS": console.log(`Languge ${lang} was created by ${autors[3]}`);
//         break;
//   case "Java": console.log(`Languge ${lang} was created by ${autors[4]}`);
//         break;
//   case "Python": console.log(`Languge ${lang} was created by ${autors[5]}`);
//         break;
// }

// НАПИШІТЬ РЕЧЕННЯ ЗА ДОПОМОГОЮ ШАБЛОННОГО РЯДКА "ДОБРОГО ДНЯ,МЕНЕ ЗВАТИ Ярослав, МЕНІ 35 РОКІВ, Я ВИВЧАЮ JAVASCRIPT"
// const name = "Yara";
// const age = 34;
// const lang = "JAVASCRIPT";

// console.log(`ДОБРОГО ДНЯ,МЕНЕ ЗВАТИ ${name}, МЕНІ ${age} РОКІВ, Я ВИВЧАЮ ${lang}`)

// НАПИШІТЬ ПРОГРАМУ , ЯКА БУДЕ ЗАПИТУВАТИ У КОРИСТУВАЧА ПЕРІОД ПІДПИСКИ НА СЕРВІС ТА ПОКАЗУВАТИМЕ ЦІНУ ПІДПИСКИ(ВИКОРИСТАЙ IF..ELSE, ТА ПЕРЕПИШИ НА SWITCH)
// ЯКЩО ДЕНЬ - ціна 1.99
// ЯУЩО НЕДІЛЯ - ціна 5.99
// ЯКЩО МІСЯЦЬ - ціна 10.99
// ЯКЩО РІК - ціна 100.99

// const subsPeriod = ["ДЕНЬ", "НЕДІЛЯ", "МІСЯЦЬ", "РІК"];
// const periodPrice = [1.99, 5.99, 10.99, 100.99 ];
// const yourSubs = "";

// if (yourSubs === subsPeriod[0]) {
//   console.log(`Your subscription price is ${periodPrice[0]}`)
// } else if (yourSubs === subsPeriod[1]) {
//   console.log(`Your subscription price is ${periodPrice[1]}`)}

//   else if (yourSubs === subsPeriod[2]) {
//   console.log(`Your subscription price is ${periodPrice[2]}`)}

//   else if (yourSubs === subsPeriod[3]) {
//   console.log(`Your subscription price is ${periodPrice[3]}`)}

// switch(yourSubs) {
//   case subsPeriod[0]: {
//     console.log(`Your subscription price is ${periodPrice[0]}`);
//     break;
// }
//   case subsPeriod[1]: {
//     console.log(`Your subscription price is ${periodPrice[1]}`);
//     break;
// }
//   case subsPeriod[2]: {
//     console.log(`Your subscription price is ${periodPrice[2]}`);
//     break;
// }
//   case subsPeriod[3]: {
//     console.log(`Your subscription price is ${periodPrice[3]}`);
//     break;
// }
//   default: {
//     console.log(`Upps...`);
//   }
// }

// НАПИШІТЬ ПРОГРАМУ , ЯКА БУДЕ ЗАПИТУВАТИ У КОРИСТУВАЧА ПЕРІОД ПІДПИСКИ НА СЕРВІС ТА ПОКАЗУВАТИМЕ ЦІНУ ПІДПИСКИ(ВИКОРИСТАЙ IF..ELSE, ТА ПЕРЕПИШИ НА SWITCH)
// ЯКЩО ДЕНЬ - ціна 1.99
// ЯУЩО НЕДІЛЯ - ціна 5.99
// ЯКЩО МІСЯЦЬ - ціна 10.99
// ЯКЩО РІК - ціна 100.99
// Object version

// const subscription = {
//   price: [1.99, 5.99, 10.99, 100.99],
//   period: ["ДЕНЬ", "НЕДІЛЯ", "МІСЯЦЬ", "РІК"]
// }
// const price = {
//   "1": 1.99,
//   "2": 5.99,
//   "3": 10.99,
//   "4": 100.99
// };
// const period = {
//   "1": "ДЕНЬ",
//   "2": "НЕДІЛЯ",
//   "3": "МІСЯЦЬ",
//   "4": "РІК"
// };
// const yourSubs = "МІСЯЦЬ"

// switch(yourSubs) {
//   case period["1"]: {
//     console.log(`Your subscription price is ${price["1"]}`);
//     break;
// }
//   case period["2"]: {
//     console.log(`Your subscription price is ${price["2"]}`);
//     break;
// }
//   case period["3"]: {
//     console.log(`Your subscription price is ${price["3"]}`);
//     break;
// }
//   case period["4"]: {
//     console.log(`Your subscription price is ${price["4"]}`);
//     break;
// }
//   default: {
//     console.log(`Upps...`);
//   }
// }


// НАПИШІТЬ ПРОГРАМУ, ЯКА БУДЕ ВИЗНАЧАТИ ДОВЖИНУ ІМЕНІ , ЯКЩО ІМЯ БІЛЬШЕ 7 СИМВОЛІВ, КОНСОЛЬ ВИВОДИТЬ "Wow, you  have a REALLY long name!" , ЯКЩО МЕНШЕ 7
// "Your name isn't very long"

// const name = "dfgfdg";

// if (name.length > 7) {
//   console.log("Wow, you  have a REALLY long name!");
// } else {
//    console.log("Your name isn't very long");
// }
//_______________________________________

// FizzBuzz
// Потрібно перебрати усі числа  від 1 до n. Треба вивести у консоль числа, де n - це ціле число, з такими умовами:

// виведення fizz замість чисел, кратних 3;
// виведення buzz замість чисел, кратних 5;
// виведення fizzbuzz замість чисел, кратних як 3, і 5.


// for ( let i = 1; i <= n; i += 1) {
//   if ( i % 3 === 0 && i % 5 !== 0) {
//     console.log("fizz")
//   } else if ( i % 3 !== 0 && i % 5 === 0) {
//     console.log("buzz")
//   }
// }


// for ( let i = 1; i <= n; i += 1) {
//   if ( i % 3 !== 0 && i % 5 !== 0) {
//     console.log("Никакое", i);
//   }

// else
//  {
//     if ( i % 3 === 0 && i % 5 !== 0) {
//     console.log("fizz");
//   } else {
//      console.log("fizzbuzz");
//   }
//    if ( i % 5 === 0) {
//     console.log("buzz");
//   }
//   }
 
// }
// const n = 15;

// for ( let i = 1; i <= n; i += 1) {
//   if ( i % 3 === 0 && i % 5 === 0) {
//     console.log("fizzbuzz");
//   } else if (i % 3 === 0) {
//     console.log("fizz");
//   } else if (i % 5 === 0) {
//     console.log("buzz");
//   } else {
//     console.log(i);
//   }
// }







