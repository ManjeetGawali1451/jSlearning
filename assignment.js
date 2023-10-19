
console.log("------- Assignment ------");
console.log("------ Step 1 -----");
console.log(` Removed Duplicate element from array`);
const arrayNum=[11,3,4,11,4,7,3]
const setNum=new Set(arrayNum)
const newArray=[...setNum]
console.log(newArray);

console.log("------ Step 2 --------");
const inputString = "How are you mate";
function convertString(inputString) {
  let outputString = "";

  for (let i = 0; i < inputString.length; i++) {
    // Check if the current position is odd or even
    const isOdd = i % 2 == 0;

    if (isOdd) {
      // Capitalize letters at odd positions
      outputString += inputString[i].toUpperCase();
    } else {
      // Keep letters at even positions as they are
      outputString += inputString[i];
    }
  }

  // Add a space at the beginning of the output string
  outputString = " " + outputString;

  return outputString;
}

const inputString2 = "How are you mate";
const outputString = convertString(inputString2);
console.log(outputString);