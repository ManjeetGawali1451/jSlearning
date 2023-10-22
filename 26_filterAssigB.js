console.log("------- Assignment ------");
class Employee {
  constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
    this.emp_id = emp_id;

    this.emp_name = emp_name;

    this.emp_dept = emp_dept;

    this.emp_salary = emp_salary;

    this.emp_company = emp_company;
  }
}

const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");

const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");

const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");

const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");

const emp_monica = new Employee(77, "Monica", "IT", 40000, "Wipro");

const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");

const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const arrayEmployees = [
  emp_anil,
  emp_radha,
  emp_rishi,
  emp_sonali,
  emp_monica,
  emp_viny,
  emp_mahi,
];
console.log(`----- Step 1 -----`);
console.log(`Traversing Tcs employees:`);
const arrayTcsEmployees = arrayEmployees.filter((employee) => {
  return employee.emp_company == "TCS";
});

arrayTcsEmployees.forEach(employee => {
                 console.log(`Company -->${employee.emp_company} Name--> ${employee.emp_name}`);   
});
console.log(`================================================================================`);
console.log(`------ Step 2 --------`);
const arrayWiproEmployees = arrayEmployees.filter((employee) => {
  return employee.emp_company == "Wipro";
});
const arrayTransform = arrayWiproEmployees.map((employee) => {
  return employee.emp_salary;
                
 
});
 
let sum=0
for (let index = 0; index < arrayTransform.length; index++) {
                    sum += arrayTransform[index];
                    
}
   console.log(` The Average salary of Employee from company wipro is :${sum/arrayTransform.length}`);
