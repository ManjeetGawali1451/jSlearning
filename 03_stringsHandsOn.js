

console.log("======= Assignment =======");


function stringHandson(){
    var str= "   Hey you are doing good, keep it up   "
    console.log(str);
    var lengthBeforeTrim = str.length;
    console.log("Total length of string : ", str.length);
    var result = str.trim();
    console.log("After removing the extra space: ", result.length);
    var lengthAfterTrim = result.length;
    var result = lengthBeforeTrim - lengthAfterTrim;
    console.log('Removed extra spaces are: ', result);
    console.log(`The First and last character of given string is: "H" and "P"`);
    console.log(`Number of value remained after step are :"7"`);
    var result=str.indexOf("good")
    console.log("The index of the word good is",result);
    var result=str.slice(26)
    console.log("The starting from 22 is :",result);
    var result=str.includes("up")
    console.log("The given string is ends with up is :",result);
    var result=str.includes("Hey")
    console.log("The given string starts with Hey is:",result);
}
stringHandson()
