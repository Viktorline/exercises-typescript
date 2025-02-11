interface SalaryStatistics {
  min: number;
  max: number;
  avg: number;
}

// BEGIN
export interface EmployeeSalary {
  [name: string]: number;
}

export const buildSalaryStatistics = (employees: EmployeeSalary): SalaryStatistics => {
  const salaries = Object.values(employees);
  const min = Math.min(...salaries);
  const max = Math.max(...salaries);
  const avg = salaries.reduce((acc, salary) => acc + salary, 0) / salaries.length;

  return { min, max, avg };
};
// END
