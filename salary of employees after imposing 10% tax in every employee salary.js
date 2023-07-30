var employees=[
    {name: 'hanumant', salary: 85000},{name: 'shekhar', salary: 39000},{name: 'dhruv', salary: 75358},
    {name: 'rupali', salary: 15000},{name: 'pankaj', salary: 89000},{name: 'rahul', salary: 41500},
    {name: 'mohit', salary: 80000},{name: 'neeraj', salary: 60000},{name: 'maya', salary: 91234}
]


//salary after imposing 10% tax in every employee salary
var newemployees = employees.map(e => ({name:e.name, salary:e.salary -((e.salary*10)/100)}));
newemployees.forEach(e => console.log(e));


