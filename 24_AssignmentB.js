console.log("------ Assignment -------");

class Employee{
 constructor(emp_id,emp_name,emp_depart,emp_salary,emp_company){
       this.emp_id=emp_id;
       this.emp_name=emp_name;
       this.emp_depart=emp_depart;
       this.emp_salary=emp_salary;
       this.emp_company=emp_company;
 }           
}
const emp_Anil =new Employee(22,"Anil","IT",50000,"TCS")
const emp_Radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_Rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_Sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_Monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_Viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_Mahi = new Employee(66, "Mahesh", "HR", 85000, "Infy");

const arrayEmployee=[emp_Anil,emp_Radha,emp_Rishi,emp_Sonali,emp_Monika,emp_Viny,emp_Mahi]
console.log("----- Step 1 ------");
 console.log(`Employees Working In TCS`);
 arrayEmployee.forEach((Employee) => {
 if(Employee.emp_company=="TCS"){
                    console.log(`${Employee.emp_name} ${Employee.emp_company}`);
 }
})
console.log("---------------------------------------------------------------------------------------------");
console.log("----- Step 2 ------");
console.log(`Finance Department Employees`);
arrayEmployee.forEach((Employee) => {
     if (Employee.emp_depart=="Finance") {
                   console.log(`${Employee.emp_name} ${Employee.emp_depart}`); 
     }               
})
console.log("---------------------------------------------------------------------------------------------");
console.log("----- Step 3 ------");
console.log(`Employees Names starts with R`);
console.log(emp_Radha);
console.log(emp_Rishi);
console.log("---------------------------------------------------------------------------------------------");
