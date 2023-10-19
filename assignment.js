
console.log("------- Assignment ------");
console.log("------ Step 1 -----");
console.log(` Removed Duplicate element from array`);
const arrayNum=[11,3,4,11,4,7,3]
const setNum=new Set(arrayNum)
const newArray=[...setNum]
console.log(newArray);

console.log("------ Step 2 --------");
const inputString = "How are you mate";
const convertedString = inputString.replace(/./g, function(match, offset) {
    return offset % 2 === 0 ? match.toUpperCase() : match.toLowerCase();
});

console.log(convertedString);

