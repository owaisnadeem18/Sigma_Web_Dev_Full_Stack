// Object Oriented Programming

let obj = {
  a: 1,
  b: "Owais",
};

console.log(obj);

let animal = {
  eats: true,
};

let rabbit = {
  jumps: true,
};

rabbit.__proto__ = animal;
console.log(rabbit.__proto__);
console.log(rabbit);

// prototype of an object: They are basically considered as some more additional peoperties of an object
//  or
// if we want to add some more properties in our object then we can use the prototype functionality

// It's time to look at the classes in JavaScript

class Animal {
  constructor(name) {
    this.name = name;
    console.log("Object is created");
  }

  eats() {
    // super();
    console.log("Kha rho hoon");
  }

  jumps() {
    console.log("I am jumping");
  }
}

let a = new Animal("bux");
console.log(a);

// Now, create a class of 'Lion', where we can link it to our animal class which means that animal class will get all of those properties which are present in an animal

class lion extends Animal {
  constructor(name) {
    super(name);
    console.log("Object is created and he is a lion");
  }
  eats() {
    super.eats();
    console.log("Zyada khaa rha hoon");
  } // method overriding
}

let l = new lion("sher haaa");
console.log(l);

console.log(lion.jumps);
console.log(l.eats);
