

console.log("---------Assigment B-----------");

console.log("------------ Step 1 -----------");
console.log("------------- greater Number -----------");
function greaterNumber(num1,num2){
      var result=num1>num2?"Num1 is greater than Num2":"False"
       console.log(`${num1} is graeter than ${num2}`);
             
}        
greaterNumber(10,-10)
greaterNumber(899,800)

console.log("------------ Step 2 ----------");

function isEvenorOdd(values) {
        var num1=29
        var num2=44
        var num3=0
        var num4=101
        var result=num1%2==0?"Even":"odd"
        var result2=num2%2==0?"Even":"odd"
        var result3=num3%2==0?"Even":"odd"
        var result4=num4%2==0?"Even":"odd"
        console.log(`${num1} is ${result}`);
        console.log(`${num2} is ${result2}`);
        console.log(`${num3} is ${result3}`);
        console.log(`${num4} is ${result4}`);
}
isEvenorOdd()
console.log("**********************************");

console.log("--------- Step 3 ----------");
console.log("--------- Word Length --------");

function wordLength(str) {
    var str=str.length
    
     console.log(`The length of given string is ${str}`);
    var result=str%2==0?"Even":"odd"
    console.log(`This number is ${result}`);
}
console.log(`Given string is "Javscript" `);
wordLength("JavaScript")
console.log("*************");
console.log(`Given string is "Developer" `);
wordLength("developer")
console.log("*************");
console.log(`Given string is "Google"`);
wordLength("google")

//function square(num){
   //var result = num * num; 
   //return result;
//}
//var squareNum = square(5);
//console.log('Num is 5 and its square is: ', squareNum);
