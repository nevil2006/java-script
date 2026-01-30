const employees = [
    {id:1, name: 'Alice', department: 'HR' ,Active:true},
    {id:2, name: 'Bob', department: 'Engineering',Active:false},
    {id:3, name: 'Charlie', department: 'Sales',Active:true},
    {id:4, name: 'David', department: 'Engineering',Active:true},
    {id:5, name: 'Eve', department: 'HR',Active:false}

];
const activeEmployees = employees.filter(e => e.Active === true);
console.log(activeEmployees);
