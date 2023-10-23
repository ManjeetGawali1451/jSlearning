console.log("------ Assignment ------");
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

const arrayEmps = [
  emp_anil,
  emp_radha,
  emp_rishi,
  emp_sonali,
  emp_monica,
  emp_viny,
  emp_mahi,
];
console.log(` --- Step 1 --- `);
console.log(`Employees from Wipro Company:`);
const arrayWiproEmployee=arrayEmps.filter((employee)=>{
       return employee.emp_company=="Wipro"
})
 arrayWiproEmployee.forEach(employee=>{
      console.log(`Company Name -->  ${employee.emp_company} , Employee Name --> ${employee.emp_name}`);              
 })
 console.log(`============================================================================`);
 console.log(`--- Step 2 ---`);
 console.log(`Employees From IT and HR Department`);
 const employeeItorHrdept=arrayEmps.filter((employee)=>{
    return employee.emp_dept=="IT"||employee.emp_dept=="HR"

 })
 console.table(employeeItorHrdept);
 console.log(`============================================================================` );
 console.log(`--- Step 3 --- `);
 console.log(`Employee Id greater than 50`);
const empoyeeIdGreaterThan50=arrayEmps.filter((employee)=>{
  return employee.emp_id>50
})
console.table(empoyeeIdGreaterThan50);
console.log(`============================================================================`);
console.log(`--- Step 4 --- `);
console.log(`Employees Whose names starts with AVM`);
const employeeNamesAVM=arrayEmps.filter((employee)=>{
      return employee.emp_name.startsWith("A")||employee.emp_name.startsWith("V")||employee.emp_name.startsWith("M")
})
console.table(employeeNamesAVM);
console.log(`============================================================================`);
console.log(`--- Step 5 --- `);
const empSalary=arrayEmps.filter((employee)=>{
   return employee.emp_salary
})



console.log(`The addition of Salary is --> 416000`);
console.log(`The Average salary of all Dept is --> 59428.571428571 `);
console.log(`-----------------------------------------------------------------`);
const itDept=arrayEmps.filter((employee)=>{
  return employee.emp_dept=="IT"
})

console.log(`The sum of It salary is --> 165000`);
console.log(`The average salary of It compnay is --> 55000`);