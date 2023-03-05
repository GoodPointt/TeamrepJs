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
