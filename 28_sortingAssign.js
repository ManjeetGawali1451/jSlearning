console.log(`----- Assignment -----`);
console.log(`----- Step 1 -------`);
const array=[113,45,56,11,32,45,109,799,56,45]
console.log(`Given array --> ${array}`);
let reverseArray=array.reverse()
console.log(`Reversed Array --> ${reverseArray}`);
console.log(`===========================================================================`);
console.log(`----- Step 2 --------`);
const sortedArray=array.sort()
console.log(`Sorted Array --> ${sortedArray}`);
console.log(`===========================================================================`);
console.log(`----- Step 3 --------`);
const ascendingArray = array.sort((a, b) => {
  return a > b ? 1 : -1;
});
console.log(`Array in Ascending Order --> ${ascendingArray}`);
console.log(`===========================================================================`);
console.log(`----- Step 4 --------`);
let newArray=array[array.length-1]
console.log(`Greatest Number --> ${newArray}`);
console.log(`===========================================================================`);
console.log(`----- Step 5 --------`);

let smallNumber=array[0]
console.log(`Smallest Number --> ${smallNumber}`);

