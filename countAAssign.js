
console.log("======= Assignment ======");

function countCharA(str) {

 var count = 0
 var aLower='a'
 var aUpper='A'
 for (let index = 0; index < str.length-1; index++) {
     var char=str.charAt(index);
     if (aLower.includes(char) || aUpper.includes(char)) {
            count=count+1
     }
    
 }
    console.log(`The total of "a" and "A" is available in present string is ${count}`);
}
countCharA("I am Learning Javascript,The Language of Internet")
countCharA("My Favourite movie is LAggAn")

