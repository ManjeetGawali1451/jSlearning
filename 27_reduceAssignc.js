console.log('--- Assignment ----');
console.log('Step 1');
const array_numbers=[20,11,40,25,37,49,9,90,60,2,19]
const sum = array_numbers.reduce((runningTotal, value) => {
  return runningTotal + value;
});
console.log(`The addition of given array by using reduce is  --> ${sum}`);
console.log("--------------");
let  sum2=0
for (const element of array_numbers) {
      sum2= sum2 + element             
}
console.log(`The sum of given array in traditional way is  --> ${sum2}`);
console.log(`-------------------------------`);
console.log(` Step 2 `);
const mulSum=array_numbers.filter((currentValue) =>{
      return currentValue%5==0
})
console.log(`Numbers mulitiplied by 5 --> ${mulSum}`);

const sum3=mulSum.reduce((runningTotal,value)=>{
      return runningTotal+value
})
console.log(`The addition of multiply by 5 values is --> ${sum3}`);