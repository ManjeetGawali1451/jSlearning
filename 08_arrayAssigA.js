console.log("======= Assignment ======");
console.log("Given Array");
const arrayFruits=["Banana", "Orange", "Apple", "Mango","Water Melon"]
console.log(arrayFruits);
console.log("=== First and Last Index of array===");
let element0thIndex=arrayFruits[0];
console.log(element0thIndex);
let element1stIndex=arrayFruits[arrayFruits.length-1]
console.log(element1stIndex);
console.log("*****************************************************************************");
console.log("---- Adding Papaya Before banana------");
arrayFruits.unshift("Papaya");
console.log(arrayFruits);
console.log("*****************************************************************************");
console.log("------ Removing Mango From Array--------");
arrayFruits.splice(arrayFruits.length-2)
console.log(arrayFruits);


console.log("*****************************************************************************");
console.log("------- Insert pineapple at last")
arrayFruits.push("Pineapple")
console.log(arrayFruits);

console.log("*****************************************************************************");
console.log("------- Insert Dragon Fruit Before Water  Melon ")
arrayFruits.splice(5,0,"Dragon Fruit")
console.log(arrayFruits);

console.log("*****************************************************************************");
console.log("------- Replace Orange with Kiwi --------- ")
arrayFruits.splice(2, 1, "Kiwi");
console.log(arrayFruits);

console.log("*****************************************************************************");
console.log("------- Index from 1 to 4  --------- ")
var slice=arrayFruits.slice(1,5)
console.log(slice);

console.log("*****************************************************************************");
console.log("------- Any 3 elements  --------- ")
var slice=arrayFruits.slice(1,4)
console.log(slice);