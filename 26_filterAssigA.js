
console.log("------ Assignment ----")

const arrayNumbers=[20,11,40,25,37,49,9,90,60,2,19]
console.log(`--- Step 1 ---`);
console.log(`Values which are greater than 50 `);
const arrayNum2= arrayNumbers.filter((currentvalues)=>{
       return currentvalues>50
})

console.log(arrayNum2);

console.log("=========================================================================================");
console.log(`----- Step 2 -----`);
console.log(`Even numbers in Given Array:`);
const arrayEven = arrayNumbers.filter((currentvalues) => {
  return currentvalues%2==0;
});

 console.log(arrayEven);

 console.log("=========================================================================================");
 console.log(`----- Step 3 ----`);
 console.log(`Odd Numbers in Given Array`);
 const arrayOdd=arrayNumbers.filter((currentvalues)=>{
     return currentvalues%2!=0

 })
  console.log(arrayOdd);

  console.log("=========================================================================================");
  console.log(`----- Step 4 ----`);
  console.log(`values which are multiple of 5`);
  const arrayMul5 = arrayNumbers.filter((currentvalues) => {
    return currentvalues % 5==0 ;
  });
  console.log(arrayMul5);

  console.log("=========================================================================================");
  console.log(`----- Step 5 ----`);
  console.log(`values Between 20 and 50`);
  const arrayNum = arrayNumbers.filter((currentvalues) => {
    return currentvalues>=20 & currentvalues<=50;
  });
  console.log(arrayNum);