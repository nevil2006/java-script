const { act } = require("react");

const employees = [
    {id:1, name: 'Alice', department: 'HR' ,Active:true},
    {id:2, name: 'Bob', department: 'Finance',Active:false},
    {id:3, name: 'Charlie', department: 'Sales',Active:true},
    {id:4, name: 'David', department: 'Engineering',Active:true},
    {id:5, name: 'Eve', department: 'Finance',Active:false}

];
const activeEmployees = employees.filter(e => e.Active === true);
console.log(activeEmployees);

console.log();


console.log();
const filteremployees=activeEmployees.map(e=>e.name);
console.log(filteremployees);

const findriya=activeEmployees.find(e=>e.name==='Alice');
console.log(findriya);


const emp1={id:6, name: 'Frank', department: 'Marketing',Active:true};
const emp2={id:7, name: 'Grace', department: 'Finance',Active:false};

employees.push(emp1,emp2);
console.log(employees);

const updatedStatus = employees.map(e =>
  e.department ==='Finance' ? { ...e, Active: true } : e
);

console.log(updatedStatus); 

