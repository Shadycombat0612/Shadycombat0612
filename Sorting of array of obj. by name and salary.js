var employees=[
    {name: 'hanumant', salary: 85000},{name: 'shekhar', salary: 39000},{name: 'dhruv', salary: 75358},
    {name: 'rupali', salary: 15000},{name: 'pankaj', salary: 89000},{name: 'rahul', salary: 41500},
    {name: 'mohit', salary: 80000},{name: 'neeraj', salary: 60000},{name: 'maya', salary: 91234}
]

//sort by salary
employees.sort((a, b) => a.salary-b.salary);

//sort by name
employees.sort((a, b) =>
{
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    if (nameA > nameB)
    {
        return 1
    }
    else if (nameA < nameB)
    {
        return -1
    }
    else
    {
        return 0;
    }
});

