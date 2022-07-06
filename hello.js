/*
const sayHello = function(name) {
  console.log("Hello, " + name);
}

sayHello("Bailee");
*/

const returnSayHello = function(name) {
  return "Hello, " + name;
}

const greeting = returnSayHello("Bailee");
console.log(greeting);