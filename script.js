//Factory Function
const personFactory = (name, age) => {
  const sayHello = () => console.log('hello!');
  return { name, age, sayHello };
};

let nicky = personFactory('Nicky', 24);

console.log(nicky.name);

nicky.sayHello();

// Constructor 
const Person = function(name, age) {
  this.sayHello = () => console.log('hello!');
  this.name = name;
  this.age = age;
};

const nicholas = new Person('Nicholas', 24);