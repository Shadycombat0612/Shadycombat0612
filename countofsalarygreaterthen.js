var salaries=[50000, 71000, 85000, 31000, 16511, 49500, 12000, 61424]
const maxsalary=salaries.reduce((sum,nextvalue) => (sum>nextvalue ? sum:nextvalue))
console.log(maxsalary)
const maxisalary=salaries.reduce((count,salary) => (salary>35000? count+1: count), 0)
console.log(maxisalary)