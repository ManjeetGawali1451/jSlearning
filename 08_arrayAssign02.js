
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
        sumEvenPositionedNumbers  +=arrayEvenPositioned[index]
        console.log(sumEvenPositionedNumbers);
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