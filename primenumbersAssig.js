console.log("Assignment");

const primeNum=(11,3,6,10,43,29,50)
function isPrimeNumber(primeNum){
        for (let index = 0; index < primeNum; index++){ 
           if(primeNum%index==0){
                    return false;
         } 
               return true;          
}
         const result=isPrimeNumber(primeNum)
         console.log(result);       
}                


/*const num = 7;
function isPrimeNumber(num) {
  for (let index = 2; index < num; index++) {
    if (num % index == 0) {
      return false;
    }
  }
  return true;
}
const result = isPrimeNumber(11);
console.log(`Is Number Prime: ${result}`);*/

