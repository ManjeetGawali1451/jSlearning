

var greet = 'Good Morning';

 

console.log("========= length property =============");

var totalLength = greet.length;

console.log('Length of the string is: ', totalLength);

 

console.log("========== charAt() =============== ");

var charAt0 = greet.charAt(0);

console.log("Character at index 0 is: ", charAt0);

var charAt=greet.charAt(5)
console.log("The character of index 5 is:",charAt);

var lastIndex=greet.charAt(greet.length-1)
console.log("The last Index charcter is:",lastIndex);

var thirdLast=greet.charAt(greet.length-3)
console.log("The Third Last character is:",thirdLast);

console.log("========== concatenation =============== ");
var firstName = "Jenny";
var lastName = " Gates"
var result = firstName.concat(lastName);
console.log(result);

console.log("========== indexOf =============== ");
var indexOfM = greet.indexOf('M');
console.log('Index of M is: ', indexOfM);

 console.log(greet.indexOf('nin'));

 console.log('Index of char z:',greet.indexOf('z'));

 console.log('Index of char D:',greet.indexOf('D'));

console.log('Index of char o is:', greet.indexOf('o'));


console.log("========== replace =============== ");
var result =greet.replace('Morning', "Afternoon");
console.log(result);
var result = greet.replace(' ', "-");
console.log(result);

console.log("========= Upper Case=========");
var result =greet.toUpperCase("Good Morning");
console.log(result);

console.log("========= Lower Case=========");
var result =greet.toLowerCase("Good Morning");
console.log(result);

console.log("========== trim() =============== ");
var str = "   Good Afternoon  ";
var lengthBeforeTrim = str.length;
console.log("Length before trim : ", str.length);
var result = str.trim();
console.log("Length after trim: ", result.length);
var lengthAfterTrim = result.length;
var result = lengthBeforeTrim - lengthAfterTrim;
console.log('Removed extra spaces are: ', result);