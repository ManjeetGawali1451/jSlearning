
console.log("====== Assignent ======");
console.log("****** Step 1 ********");
var str="I am very good IT developer"
var count=0
var vowelsCap="AEIOU"
var vowelsLow="aeiou"
for(let index = 0; index < str.length-1; index++) {
    var char=str.charAt(index)
    if(vowelsCap.includes(char) || vowelsLow.includes(char)){
    count=count+1
}
    
}
    console.log(`The total numbers of vowels available in given string are :${count}`);

console.log("****** Step 2 *******");
    function cube() {
        
    
    var result=0
    for (let index = 0; index<=5; index++) {
        result=result+index*index*index
        
    }
      console.log(`The sum of cube of numbers from 1 to 5 are:${result}`);
    }
cube()
    
