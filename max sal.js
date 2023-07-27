var salaries=[50000, 71000, 31000, 16511, 49500, 12000, 61424]
const maxsalary=salaries.reduce((prev,next) => (prev>next ? prev:next))
console.log(maxsalary)
