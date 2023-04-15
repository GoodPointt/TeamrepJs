//TODO:==============================================
/*
Завдання 1
Натискання на кнопку "SHOW ME" має виводити значення з поля введення (дивіться на елементи в html-розмітці)
*/
// const inputElement = document.querySelector("#alertInput");
// const buttonElement = document.querySelector("#alertButton");

// buttonElement.addEventListener("click", onButtonClick);

// function onButtonClick(event) {
//   console.dir(inputElement.value);
// }

// -------------------------------

//TODO:==============================================
/*
Завдання 2
Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
*/

// const buttonElement = document.querySelector("#swapButton");
// const questionInput = document.querySelector("#leftSwapInput");
// const exclamationInput = document.querySelector("#rightSwapInput");

// buttonElement.addEventListener("click", onButtonClick);

// function onButtonClick(event) {
//   let temp;

//   temp = questionInput.value;
//   questionInput.value = exclamationInput.value;
//   exclamationInput.value = temp;
// }

//TODO:==============================================
/*
Завдання 3
Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.
*/
// const buttonElement = document.querySelector("#passwordButton");
// const inputElement = document.querySelector("#passwordInput");

// buttonElement.addEventListener("click", changeType);

// const BUTTON_CONTENT = {
//   TOSHOW: "Раскрыть",
//   TOHIDE: "Скрыть",
// };
// let temp;

// function changeType() {
//   if (inputElement.type === "text") {
//     inputElement.type = "password";
//     buttonElement.textContent = BUTTON_CONTENT.TOSHOW;
//   } else {
//     inputElement.type = "text";
//     buttonElement.textContent = BUTTON_CONTENT.TOHIDE;
//   }
// }

//TODO:==============================================
/*
Завдання 4
Кнопка "Зменшити" робить квадрат менше на 10 пікселів, Кнопка "Збільшити" - більше на 10 пікселів.
*/

// const container = document.querySelector("#button-container");
// const decreaseElement = document.querySelector("#decrease");
// const increaseElement = document.querySelector("#increase");
// const boxElement = document.querySelector("#box");
// let boxSize = boxElement.getBoundingClientRect().width;

// container.addEventListener("click", changeBoxSize2);

// function changeBoxSize(event) {
//   if (event.target === increaseElement) {
//     boxSize += 10;
//     boxElement.style.width = boxSize + "px";
//     boxElement.style.height = boxSize + "px";
//   }
//   if (event.target === decreaseElement) {
//     boxSize -= 10;
//     boxElement.style.width = boxSize + "px";
//     boxElement.style.height = boxSize + "px";
//   }
// }

// function getSize() {
//   console.dir(boxElement.getBoundingClientRect());
// }

// function changeBoxSize2(event) {
//   console.dir(boxElement.getBoundingClientRect());
//   if (event.target === increaseElement) {
//     boxSize += 10;
//     boxElement.style.width = boxSize + "px";
//     boxElement.style.height = boxSize + "px";
//   }
//   if (event.target === decreaseElement) {
//     boxSize -= 10;
//     boxElement.style.width = boxSize + "px";
//     boxElement.style.height = boxSize + "px";
//   }
// }



/*
Завдання 14
Написати функцію, яка буде створювати список подій клавіатури event.key та event.code
Додати класи на список eventList, на елементи eventCode та eventKey */

// const divBox = document.querySelector('.eventThumb');
// console.log('divBox:', divBox);

// window.addEventListener("keydown", onKeyDown);
// function onKeyDown({code, key}) {
//   console.log(code, key);
//   const list = document.createElement('ul');
//   list.classList.add('eventList');
  
//   const li = document.createElement('li');
//   li.insertAdjacentHTML('afterbegin', `<span class="eventCode">code: ${code}</span> <span class="eventKey">key: ${key}</span> `);

//   list.append(li);
//   divBox.append(list)
// }

// function onKeyDown({ code, key }) {
//   const markup = `
//     <ul><li><span class="eventCode">code: ${code}</span> <span class="eventKey">key: ${key}</span></li></ul>
//   `;
//   divBox.insertAdjacentHTML("afterbegin", markup);
// }

/// Задача с классом в DOM
// Завдання
// Взяти попереднє завдання з Зоопарком та вивести звірів, їх тип та особливості в DOM.
// Додати до списку клас animalList.На елемент списку animalElement

// class Zoo {
//   constructor() {
//     this.animals = [];
//     this.boxZoo = document.querySelector('.zooWrapper');
//     this.list = document.createElement('ul');
//     this.list.classList.add('animalList');
//   }

//   addAnimal(animal) {
//     this.animals.push(animal);
//   }

//   animalList() {
//     this.animals.forEach((animal) => {
//       const markup = `<li class="animalElement">${animal.getInfo()}</li>`;
//       console.log(markup);
//       this.list.insertAdjacentHTML('beforeend', markup)
//     });
//     this.boxZoo.append(this.list);
//   }
// }

// class Animal {
//   constructor(name, type) {
//     this.name = name;
//     this.type = type;
//   }

//   getInfo() {
//     return `name: ${this.name}, type: ${this.type}`;
//   }
// }

// class Bird extends Animal {
//   constructor(name, type, age, weight) {
//     super(name, type);
//     this.age = age;
//     this.weight = weight;
//   }

//   getInfo() {
//     return `${super.getInfo()}, age: ${this.age}, weight: ${this.weight}`;
//   }
// }

// class Reptiles extends Animal {
//   constructor(name, type, length, color) {
//     super(name, type);
//     this.length = length;
//     this.color = color;
//   }

//   getInfo() {
//     return `${super.getInfo()}, length: ${this.length}, color: ${this.color}`;
//   }
// }

// const charmillion = new Reptiles("Fluffy", "reptile", "21 cm", "yellow");
// const pigeon = new Bird("Dark", "local", "1", "150 g");

// const zoo = new Zoo();
// zoo.addAnimal(charmillion);
// zoo.addAnimal(pigeon);
// zoo.animalList();

// Отримуємо необхідні елементи з DOM
// Задача 7 Створіть HTML сторінку з табличкою,
//  яка містить список продуктів.Кожен рядок у
//  табличці повинен містити назву продукту та його ціну.
//  При натисканні на будь - який рядок у табличці відобразіть
//  повідомлення з назвою продукту та його ціною.

const table = document.getElementById('productTable');
const divBox = document.getElementById('productDetails');

table.addEventListener('click', onClick);

function onClick(event) {
  if (event.target.tagName !== "TD") {
    return
   }
  
    const ccc = event.target.parentNode;
    const productName = ccc.cells[0].textContent;
  
    const productPrice = ccc.cells[1].textContent;
    divBox.textContent = `Продукт ${productName} коштує ${productPrice}`    
  
}




