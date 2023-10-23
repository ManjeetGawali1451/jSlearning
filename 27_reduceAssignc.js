console.log('--- Assignment ----');
console.log('Reduce method');
const array_numbers=[20,11,40,25,37,49,9,90,60,2,19]
const sum = array_numbers.reduce((runningTotal, value) => {
  return runningTotal + value;
});
console.log(`The addition of given array is --> ${sum}`);
console.log("--------------");
console.log(`Addition in Traditional way`);
let  sum2=0
for (const element of array_numbers) {
      sum2= sum2 + element             
}
console.log(`The sum of given array is --> ${sum2}`);