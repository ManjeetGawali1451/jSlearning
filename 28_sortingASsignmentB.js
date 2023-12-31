
console.log(`------ Assignment -----`);
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
  console.log(`------ Step 1 ----`);
  console.log(` Sorted Employee Id in Descending order:`);

  const sortArray=arrayEmployees.sort((emp1,emp2)=>{
      return emp1.emp_id>emp2.emp_id?-1:1
  })
  arrayEmployees.forEach(sortArray=> {
    console.log(`Employee Id -->${sortArray.emp_id}    Employee Name ${sortArray.emp_name}      Employee Dept ${sortArray.emp_dept}`);
    
  });
  console.log(`================================================================================`);
  console.log(`------- Step 2 ------`);
  console.log(`Sorted Employee Department in Ascending Order:`);

  const sortArray2=arrayEmployees.sort((emp1,emp2)=>{
      return emp1.emp_dept>emp2.emp_dept?1 : -1
  })
  arrayEmployees.forEach(sortArray2=>{
     console.log(`Employee Id -> ${sortArray2.emp_id}    Employee Dept --> ${sortArray2.emp_dept}         Employee Company -->${sortArray2.emp_company}`);
  })
  console.log(`================================================================================`);
  console.log(`------- Step 3 ------`);
  console.log(` Sorted Employee Salary Decending Order:`)

  const sortArray3=arrayEmployees.sort((emp1,emp2)=>{
       return emp1.emp_salary > emp2.emp_salary ? -1 : 1;
  })
  arrayEmployees.forEach(sortArray3 => {
       console.log(`Employee Name -->${sortArray3.emp_name}     Employee Salary -->  ${sortArray3.emp_salary}    Employee Company -->   ${sortArray3.emp_company}`);
  });
