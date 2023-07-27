var salaries=[50000, 71000, 31000, 16511, 49500, 12000, 61424]
const maxsalary=salaries.reduce((sum,nextvalue) => (sum>nextvalue ? sum:nextvalue))
console.log(maxsalary)