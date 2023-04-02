//Напиши клас Client який створює об'єкт
//з ​​властивостями login email
//Оголоси приватні властивості #login #email,
//доступ до яких зроби через геттер та сеттер login email

// class Client {
//   #login;
//   #email;

//   constructor({ login, email }) {
//     this.#login = login;
//     this.#email = email;
//   }

//   get login() {
//     return {
//       login: this.#login,
//       email: this.#email,
//     };
//   }

//   set login(newLogin) {
//     this.#login = newLogin;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const client1 = new Client({ login: "Yura", email: "123@gmail.com" });
// // console.log(client1);

// console.log(client1.login);
//________________________________

//Напиши клас Notes який управляє колекцією нотаток у
//властивості items.
//Нотатка - це об'єкт із властивостями text і priority.
//Додай класу статичний метод Priopity,
//який буде повертати об'єкт із пріоритетами.
//Додай методи addNote(note), removeNote(text)
//updatePriority(text, newPriority)

// class Notes {
//   static Priopity() {
//     return { HIGH: "high", LOW: "low" };
//   }
//   constructor() {
//     this.note = [];
//   }

//   addNote(note) {
//     this.note.push(note);
//   }
//   removeNote(text) {
//     const indexOfText = this.note.findIndex(
//       (someNote) => someNote.text === text
//     );
//     console.log(indexOfText);
//     if (indexOfText >= 0) {
//       this.note.splice(indexOfText, 1);
//     } else {
//       console.log("There is no such note");
//     }
//   }

//   updatePriority({ text, newPriority }) {
//     const targetObjIndex = this.note.findIndex((obj) => obj.text === text);
//     // console.log(newPriority);
//     if (targetObjIndex >= 0) {
//       this.note[targetObjIndex].priority = newPriority;
//     } else {
//       console.log("There is no such note");
//     }
//   }
// }

// const note1 = new Notes();

// note1.addNote({ text: "Home", priority: Notes.Priopity().HIGH });
// note1.addNote({ text: "Work", priority: Notes.Priopity().LOW });
// note1.addNote({ text: "Playground", priority: Notes.Priopity().HIGH });
// // console.table(note1.note);

// // note1.removeNote("Playground");
// // console.table(note1.note);
// note1.updatePriority({ text: "123", newPriority: Notes.Priopity().LOW });
// console.table(note1.note);
//______________________

// Створити клас Worker, у якого є властивості name, age, salary.
//У класу Worker є метод getSalary.
//Створити клас TopLevelWorker, у якого є властивість hierarchyLevel
//і який успадковує клас Worker, додаючи метод getHierarchyLevel

// class Worker {
//   constructor({ name, age, salary }) {
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
//   }

//   getSalary() {
//     return this.salary;
//   }
// }

// class TopLevelWorker extends Worker {
//   constructor({ name, age, salary, hierarchyLevel }) {
//     super({ name, age, salary });
//     this.hierarchyLevel = hierarchyLevel;
//   }

//   getHierarchyLevel() {
//     return this.hierarchyLevel;
//   }
// }

// const worker1 = new TopLevelWorker({
//   name: "Lunna",
//   age: 32,
//   salary: 100_000,
//   hierarchyLevel: "foreman",
// });
// const style = "color: red";
// console.log(`%cНаш работник ${worker1.hierarchyLevel}`, style);

//TODO:======================
// Створи клас для калькулятора, який має такі методи:
// метод number, який набуває початкового значення для наступних операцій
// Геттер, який повертає фінальний результат усіх операцій, проведених із числом
// методи add, substruct, divide, multiply
// Об'єкт класу може проводити послідовні операції у вигляді ланцюжка

// class Calculator {
//   constructor(number) {
//     this.number = number;
//     this.finalResult = 0;
//   }

//   add(addedNumber) {
//     this.number += addedNumber;
//     return this;
//   }

// substruct(substructedNumber) {
//   this.number -= substructedNumber;
//   return this;
// }

// divide(dividedNumber) {
//   if (dividedNumber !== 0) {
//     this.number /= dividedNumber;
//     return this;
//   } else {
//     console.log("Ділити на 0 не можна!");
//   }
// }

//   multiply(multiplieddNumber) {
//     this.number *= multiplieddNumber;
//     return this;
//   }

//   get finally() {
//     return this.number;
//   }

//   set reset(nullifyer = 0) {
//     this.number = nullifyer;
//     return this;
//   }
// }

// const calculator1 = new Calculator(0);

// console.log(calculator1.add(5));
// console.log(calculator1.add(5));
// console.log(calculator1.add(5));
// console.log(calculator1.substruct(5));
// console.log(calculator1.substruct("5"));
// console.log(calculator1.divide(5));
// console.log(calculator1.multiply(5));
// console.log(calculator1.finally);
// console.log((calculator1.reset = 0));

// let result = calculator1.add(5).multiply(5).divide(5).substruct(5).finally;
// console.log(result);
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Задача: написати клас, який буде представляти зоопарк тварин.
// У зоопарку повинні бути різні типи тварин, такі як ссавці, птахи, рептилії тощо.
// Кожен тип тварин повинен мати свої властивості та методи, наприклад,
//  методи для отримання інформації про тварину та для годівлі тварин.
//  Крім того, зоопарк повинен мати метод для додавання тварин до списку та
// метод для виведення списку всіх тварин у зоопарку.

// class Zoo {
//   constructor() {
//     this.animals = [];
//   }

//   addAnimal(animal) {
//     this.animals.push(animal);
//   }

//   animalList() {
//     this.animals.forEach((animal) => {
//       console.log(animal.getInfo());
//     });
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

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// TODO:=============================================
// Напиши class CarsManager  який створює об'єкти
// Для управління салону автомобілів. Використати приватну змінну cars
// Додай методи класу:
// getModels() - повертайте масив усіх моделей
// changeModel(oldModelName, newModelName) - Замінює стару модель на ному
// getTotalPrice() - отримує суму усіх автомобілів
// getMake(make) - повертає масив виробника

const vehicles = [
  { make: "Honda", model: "CR-V", type: "suv", price: 24045 },
  { make: "Toyota", model: "4Runner", type: "suv", price: 34210 },
  { make: "Ford", model: "F-150", type: "truck", price: 27110 },
  { make: "Honda", model: "Accord", type: "sedan", price: 22455 },
  { make: "Mazda", model: "CX-9", type: "suv", price: 31520 },
  { make: "Toyota", model: "Sequoia", type: "suv", price: 45560 },
  { make: "Ford", model: "Fusion", type: "sedan", price: 22120 },
  { make: "Mazda", model: "Mazda 6", type: "sedan", price: 24195 },
  { make: "Ford", model: "Explorer", type: "suv", price: 31660 },
  { make: "Toyota", model: "Tacoma", type: "truck", price: 24320 },
];

class CarsManager {
  #cars;
  constructor(cars) {
    this.#cars = cars;
  }

  get cars() {
    return this.#cars;
  }

  getModels() {
    return this.#cars.map((car) => car.model);
  }

  changeModel(oldModelName, newModelName) {
    this.#cars.forEach((car) => {
      if (car.model === oldModelName) {
        car.model = newModelName;
      }
    });
    return this.#cars;
  }

  getTotalPrice() {
    return this.#cars.reduce((acc, el) => (acc += el.price), 0);
  }

  getMake(make) {
    return this.#cars.filter((car) => car.make === make);
  }
}

const carsManager = new CarsManager(vehicles);
// console.table(carsManager.cars);
// console.table(carsManager.getModels());
console.table(carsManager.changeModel("CR-V", "Rav-4"));
console.table(carsManager.getTotalPrice());
console.table(carsManager.getMake("Honda"));
