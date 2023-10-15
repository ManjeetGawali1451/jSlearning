console.log("----- Assignment -------");
const employeeDetails = `{
  "name":"Alex Melon",
  "id":"E00245",
  "role":["Dev","DBA"],
  "age":23,
  "doj":"11/12/2019",
  "married":false,
  "address": {
         "street":"32,Loham St.",
         "city":"Innsbruck",
         "country":"Austria"

  },
  "referred-by":"E0012"
}`;


const obj=JSON.parse(employeeDetails)
console.log(obj);
console.log(` Type of json object is: ${typeof obj}`);
console.log(` Role -->  ${obj.role[0]}`);
let obj2=obj.name.split(" ")
console.log(`Last Name --> ${obj2[1]}`);

const date=new Date("11/12/2019")
console.log(`Joining Year Of Employee: ${date.getFullYear()}`)

