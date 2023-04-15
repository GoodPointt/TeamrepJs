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

const container = document.querySelector("#button-container");
const decreaseElement = document.querySelector("#decrease");
const increaseElement = document.querySelector("#increase");
const boxElement = document.querySelector("#box");
let boxSize = boxElement.getBoundingClientRect().width;

container.addEventListener("click", changeBoxSize2);

function changeBoxSize(event) {
  if (event.target === increaseElement) {
    boxSize += 10;
    boxElement.style.width = boxSize + "px";
    boxElement.style.height = boxSize + "px";
  }
  if (event.target === decreaseElement) {
    boxSize -= 10;
    boxElement.style.width = boxSize + "px";
    boxElement.style.height = boxSize + "px";
  }
}

function getSize() {
  console.dir(boxElement.getBoundingClientRect());
}

function changeBoxSize2(event) {
  console.dir(boxElement.getBoundingClientRect());
  if (event.target === increaseElement) {
    boxSize += 10;
    boxElement.style.width = boxSize + "px";
    boxElement.style.height = boxSize + "px";
  }
  if (event.target === decreaseElement) {
    boxSize -= 10;
    boxElement.style.width = boxSize + "px";
    boxElement.style.height = boxSize + "px";
  }
}
