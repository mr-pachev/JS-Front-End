function solve(input) {
  class Cat {                           //създаване на клас
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    meow() {                            //метод за мяучане
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }

  for (const line of input) {           //обхождане на васива
    let name = line.split(" ")[0];
    let age = line.split(" ")[1];
    age = Number(age);

    let currentCat = new Cat(name, age); //създаване на конструктор 
    currentCat.meow();                  //извикване на метода от създадения клас
  }
}

solve(["Candy 1", "Poppy 3", "Nyx 2"]);
