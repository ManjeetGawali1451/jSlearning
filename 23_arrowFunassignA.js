
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