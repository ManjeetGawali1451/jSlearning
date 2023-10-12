console.log("------ Assignment --------");
console.log("------ Step 1 --------");
let personDetails={
         firstName:'Mohit',
         lastName:'Mishra',
         age:'22',
         Education:'MBA'           
}
console.log("Personal Details:",personDetails);

console.log("-------- Step 2 ---------");
let collegeDetails={
             Name:'Sinhagad Institute',
             Location:'Pune',
             Field:'Engineering College',
             Established:'1995'       
}
console.log("College Details:",collegeDetails);

console.log("-------- Step 3 --------");
Object.assign(personDetails,collegeDetails)
console.table(personDetails);

console.log("--------- Step 4 ---------");
console.log("********* Before Freeze ********");
let arrayFriends=["Monty","Rocky","John","Martin"]
console.log(arrayFriends);
console.log("********* After Freeze ********");
Object.freeze(arrayFriends)
console.log(arrayFriends);

console.log("-------- Step 5 ----------");
const Company="Codemind Technology"
let reverse=""
for (let index = Company.length-1; index>=0; index--) {
                    let char=Company.charAt(index)
                    if (char==' ')  {
                             break;           
                    }
                    else{
                            reverse=reverse+char            
                    }
}
console.log("Given String is",Company);
console.log("Reversed single  Name :",reverse);