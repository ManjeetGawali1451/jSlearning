
console.log(personName);
// console.log(age);

var personName = "Elon Musk";
let age = 22;

console.log(personName);

console.log(age);

add();
function add() {
  console.log(`Addition is: ${10 + 10}`);
}

multiply();

var multiply = function () { //function expression cant be hosted
  console.log(`Multiplication is: ${10 * 10}`);
};