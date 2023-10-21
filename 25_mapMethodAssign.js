console.log("----- Assignment ------");
console.log("------ step 1 ------");
const arrayNumbers=[20,11,40,25,23,11,9,31,60,2,19]

const arrayTransform= arrayNumbers.map((currentValue) =>{
     return currentValue + 10

})
console.log(arrayTransform);

console.log("----- Step 2 ----");

const arrayCube = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];

const arrayTransform2= arrayCube.map((currentValue)=>{
     return currentValue*currentValue*currentValue

})
   console.log(`Cubes of given array`);
   console.log(arrayTransform2);
