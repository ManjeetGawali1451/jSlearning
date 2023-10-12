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