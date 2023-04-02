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

class Worker {
  constructor({ name, age, salary }) {
    this.name = name;
    this.age = age;
    this.salary = salary;
  }

  getSalary() {
    return this.salary;
  }
}

class TopLevelWorker extends Worker {
  constructor({ name, age, salary, hierarchyLevel }) {
    super({ name, age, salary });
    this.hierarchyLevel = hierarchyLevel;
  }

  getHierarchyLevel() {
    return this.hierarchyLevel;
  }
}

const worker1 = new TopLevelWorker({
  name: "Lunna",
  age: 32,
  salary: 100_000,
  hierarchyLevel: "foreman",
});
const style = "color: red";
console.log(`%cНаш работник ${worker1.hierarchyLevel}`, style);
