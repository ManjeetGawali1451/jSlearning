
console.log("********* Assignment ***********");  
console.log("---------- Step 1 ----------");


var square=function(values){
        return values*values
}
var square1=square(5)
var square2=square(6)
var square3=square(25)
var square4=square(100)
var square5=square(67)
var square6=square(89)
var square7=square(59)
console.log(`The square of 5 is ${square1}`);
console.log(`The square of 6 is ${square2}`);
console.log(`The square of 25 is ${square3}`);
console.log(`The square of 100 is ${square4}`);
console.log(`The square of 67 is ${square5}`);
console.log(`The square of 89 is ${square6}`);
console.log(`The square of 59 is ${square7}`);
console.log("----------- Step 2 -------------");
console.log(`Type of function expression is: ${typeof(square)}`);

console.log("----------- Step 3 -------------");
var Area=function(length,width){
            return length*width
    }
    var rectangle=Area(499,917)
    console.log(`The area of rectangle plot is==> ${rectangle}`);

console.log("---------- Step 4 ---------------");
console.log("---------- Swap The values --------");
var swapValues=function(valueOne,valueTwo){
        console.log("Before Swap==>",valueOne,valueTwo);
        var temp=valueOne
        valueOne=valueTwo
        valueTwo=temp
        console.log("After swap==>",valueOne,valueTwo);
    }
    swapValues("Mahi","Raina")
    swapValues(55,77)

console.log("----------- Step 5 -----------");
var one=function(square){
        var str= " JS the most popular language in internet"
        
        var result=str.length
        var charAt=str.charAt(6)
        var charAt2=str.charAt(11)
        var lastIndex=str.charAt(str.length-1)
        var firstChar=str.charAt(1)
        var words=str.split(" ")
        var square=8*8
        
        
        

        console.log(`The total character in given string is ${result}`);
        console.log(`Chracter on Index number 6 is :${charAt}`);
        console.log(`Chracter on Index number 11 is :${charAt2}`);
        console.log(`Character on last Index is : ${lastIndex}`);
        console.log(`Character on first Index is : ${firstChar}`);
        console.log(`The total words are available in the string is: ${words.length}`);
        console.log(`The square of words length is : ${square}`);

        
        
    }
    one()
    
        