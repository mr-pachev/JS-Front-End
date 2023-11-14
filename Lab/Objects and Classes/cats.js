function solve(input) {
   class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    meow() {
      console.log(`${name}, age ${age} says Meow`);
    }
  }

  for (const line of input) {
    let name = line.split(" ")[0];
    let age = line.split(" ")[1];
    age = Number(age);
  }
}

solve(["Mellow 2", "Tom 5"]);
