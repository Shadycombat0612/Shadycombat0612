var salaries=[9000, 18000, 8000, 4500, 30000, 12000, 100]
initialsum=0;
const sumofsalariesgreaterthen10k = salaries.reduce((sum, salary) => {
    if (salary > 10000) {
      return sum + salary;
    }
    return sum;
  }, 0);
  console.log("sum of salaries greater then 10,000 is = ", sumofsalariesgreaterthen10k);
  const sumofsalariesgreaterthen8k = salaries.reduce((sum, salary) => sum + (salary > 8000 ? salary : 0), 0);
  console.log("sum of salaries greater then 8,000 is = ", sumofsalariesgreaterthen8k);