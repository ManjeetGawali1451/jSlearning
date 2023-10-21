console.log("----- Assignment ------");
console.log("------ step 1 ------");
const arrayNumbers=[20,11,40,25,23,11,9,31,60,2,19]
console.log(`Added 10 in Given array:`);
const arrayTransform= arrayNumbers.map((currentValue) =>{
     return currentValue + 10

})
console.log(arrayTransform);

console.log("----- Step 2 ----");


const arrayCube = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];

const arrayTransform2= arrayCube.map((currentValue)=>{
     return currentValue*currentValue*currentValue

})
   console.log(`Cubes of given array:`);
   console.log(arrayTransform2);

   console.log("----- Step 3 -----");

   const arrayIndex = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];

   const arrayTransform3= arrayIndex.map((currentValue,index) =>{
                    return currentValue+index
   })
    console.log(`Index Value of Given Array`);
    console.log(arrayTransform3);