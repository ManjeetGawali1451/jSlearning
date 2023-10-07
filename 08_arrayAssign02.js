
console.log("------- Assignment --------");

const arrayNumbers=[20,31,40,25,23,11,29,9,60,2,11]
console.log(arrayNumbers);
var arrayElements=arrayNumbers.length
console.log(`The length of given array elements is --> ${arrayElements}`);
console.log("-------------------------------------------------------------------------");
console.log("First and Last Element");
let elements0thIndex=arrayNumbers[0]
console.log(elements0thIndex);
let elementLastIndex=arrayNumbers[arrayNumbers.length-1]
console.log(elementLastIndex);
console.log("---------------------------------------------------------------------------");
console.log("Third Last Element");
let elementThirdlastIndex=arrayNumbers[arrayNumbers.length-3]
console.log(elementThirdlastIndex);
console.log("---------------------------------------------------------------------------");
console.log("Find all the even numbers");
var arrayEvenNumebrs=[20,31,40,25,23,11,29,9,60,2,11]

for (const index in arrayEvenNumebrs) {
    let num=arrayEvenNumebrs[index]
    if (num%2==0) {
        
   const element = arrayEvenNumebrs[index];
    console.log(num);
    }
}
console.log("---------------------------------------------------------------------------");
console.log("Find the odd numbers");
var arrayOddNumebrs=[20,31,40,25,23,11,29,9,60,2,11]

for (const index in arrayOddNumebrs) {
    let num2=arrayOddNumebrs[index]
    if (num2%2 !==0) {
   const element = arrayOddNumebrs[index];
   console.log(num2);
    }
}

console.log("---------------------------------------------------------------------------");
console.log("Find Even Positioned elements");
var arrayEvenPositioned=[20,31,40,25,23,11,29,9,60,2,11]
for (const index in  arrayEvenPositioned) {
    var num3=arrayEvenPositioned[index]
    
    if (index % 2 == 0){ 
        let element=arrayEvenPositioned[index]
        console.log(num3);
        
        
        
                
    }
}

        
console.log("---------------------------------------------------------------------------");
console.log("Find odd Positioned elements");
var arrayoddPositioned=[20,31,40,25,23,11,29,9,60,2,11]
for (const index in  arrayoddPositioned) {
    var num4=arrayoddPositioned[index]
    if (index % 2 !== 0){ 
        let element=arrayoddPositioned[index]
        console.log(num4);
    }
}
console.log("-------------------------------------------------------------------------");
console.log("Sum of all elemenst");
let  arraySum = [20,31,40,25,23,11,29,9,60,2,11];
console.log(arraySum);
let sum = 0;

for (let i = 0; i < arraySum.length; i++) {
  sum += arraySum[i];
}
console.log(`The total sum of the array elements is ${sum}`); 
console.log("--------------------------------------------------------------------------");
console.log("The numbers which can multiply by 5");

var arrayMultiply=[20,31,40,25,23,11,29,9,60,2,11]

for (const index in arrayMultiply) {
    let num4=arrayMultiply[index]
    if (num4%5==0) {
        
   const element = arrayMultiply[index];
    console.log(num4);
    }
}
console.log("--------------------------------------------------------------------------");
console.log("is number 115 is available or not");
var arrayAvailable=[20,31,40,25,23,11,29,9,60,2,11]
var includes=arrayAvailable.includes(115)
console.log(includes);
console.log(`The number 115 is not available in array list`);
console.log("--------------------------------------------------------------------------");
console.log("is 23 is available in array string");
var arrayAvailable2=[20,31,40,25,23,11,29,9,60,2,11]
var includes=arrayAvailable2.includes(23)
console.log(includes);
console.log(`The number 23 is  available in array list`);
console.log("--------------------------------------------------------------------------");
console.log("Insert numbers 55, 66 before index 3");
var arrayInsert=[20,31,40,25,23,11,29,9,60,2,11]
var splice=arrayInsert.splice(3,0, 55,66)
console.log(arrayInsert);
console.log("--------------------------------------------------------------------------");
console.log("Delete 3 element from Index 4");
var arrayDelete=[20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11]
var splice=arrayDelete.splice(4,3)
console.log(splice);