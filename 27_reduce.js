
console.log(`---- Reduce Method ----`);
const array = [2, 5, 3, 2, 7, 11];

const sum = array.reduce((runningTotal, value) => {
  return runningTotal + value;
}, 0);

console.log(sum);

console.log(`Flat map`);
const nestedArray = [
  [2, 5],
  [4, 5, 6],
  [2, 7, 11],
];

const arrayNum = nestedArray.flatMap((element) => element);
const sum2=arrayNum.reduce((runningTotal,value)=>{
   return runningTotal + value;
})
console.log(arrayNum);
console.log(sum2);
