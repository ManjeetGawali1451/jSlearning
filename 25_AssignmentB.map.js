
console.log("-------- Assignment -------");

class Employee {
  constructor(emp_id, emp_name, emp_depart, emp_salary, emp_company) {
    this.emp_id = emp_id;
    this.emp_name = emp_name;
    this.emp_depart = emp_depart;
    this.emp_salary = emp_salary;
    this.emp_company = emp_company;
  }
}
const emp_Anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_Radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_Rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_Sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_Monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_Viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_Mahi = new Employee(66, "Mahesh", "HR", 85000, "Infy");

const arrayEmployees=[
      emp_Anil,
      emp_Radha,
      emp_Rishi,
      emp_Sonali,
      emp_Monika,
      emp_Viny,
      emp_Mahi              
];

const arrayEmployee=arrayEmployees.map((employee)=>{
        return employee.emp_salary           

})
  console.log(`------ Step 1 ------`);
  console.log(`List of Employee Salary:`);  
  console.log(arrayEmployee);
console.log("========================================================================================");

const arrayDept=arrayEmployees.map((department)=>{
      return department.emp_depart
})
console.log(`------ Step 2 ------`);
console.log(`List of All Departments:`);  
console.log(arrayDept);

console.log("========================================================================================");
console.log(`------ Step 3 ------`);
console.log(`List of Employee Id:`);  
const arrayId = arrayEmployees.map((id) => {
  return id.emp_id;
});
console.log(arrayId);
