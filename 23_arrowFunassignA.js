
console.log("---- Assignment ----");
console.log("---- step 1 ------");
 let arrowFun =()=>{
         console.log(`Good Morning,Today is Thrusday`);           
 }
 arrowFun()
console.log("*************************************");
console.log("----- Step 2 ------");

let arrowMul=(num1,num2,num3=1)=>{
    let result=num1*num2*num3
     console.log(`The multiplication of ${num1},${num2},${num3} --> ${result}`);
     
}
arrowMul(5,5,2)
arrowMul(10,4)
console.log("*************************************");
console.log("---- Step 3 -----");
let arrowAdd=(val1,val2,val3,val4,val5)=>{
     let result=val1+val2+val3+val4+val5
     return result               
}
let result = arrowAdd(100, 100, 200, 349, 756);
let result2=arrowAdd(" I am " ,"Learning ","ES6 ", "features " ,"in depth")
console.log(`The addition of given values is --> ${result}`);
console.log(`Given String is -->  ${result2}`);
