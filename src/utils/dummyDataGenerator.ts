import { Employee, Department, TurnoverStatus, WorkingHours } from '../types/employee';

// Function to generate random number between min and max (inclusive)
const randomBetween = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// Function to generate a random date in the past year
const randomDateInPastYear = (): string => {
  const today = new Date();
  const pastYear = new Date(today);
  pastYear.setFullYear(today.getFullYear() - 1);
  
  const randomTime = pastYear.getTime() + Math.random() * (today.getTime() - pastYear.getTime());
  return new Date(randomTime).toISOString();
};

// List of job titles for random assignment
const jobTitles: { [key: string]: string[] } = {
  [Department.Engineering]: ['Software Engineer', 'DevOps Engineer', 'QA Engineer', 'System Architect', 'Frontend Developer', 'Backend Developer'],
  [Department.Sales]: ['Sales Representative', 'Sales Manager', 'Account Executive', 'Business Development Rep'],
  [Department.Marketing]: ['Marketing Specialist', 'Content Writer', 'SEO Specialist', 'Social Media Manager'],
  [Department.HumanResources]: ['HR Specialist', 'Recruiter', 'HR Manager', 'Benefits Coordinator'],
  [Department.Finance]: ['Accountant', 'Financial Analyst', 'Payroll Specialist', 'Finance Manager'],
  [Department.Operations]: ['Operations Manager', 'Project Manager', 'Business Analyst', 'Process Improvement Specialist'],
  [Department.CustomerSupport]: ['Support Specialist', 'Customer Success Manager', 'Technical Support Engineer'],
  [Department.Legal]: ['Legal Counsel', 'Compliance Officer', 'Contract Specialist'],
  [Department.Research]: ['Research Scientist', 'Data Analyst', 'Product Researcher'],
  [Department.Executive]: ['CEO', 'CTO', 'CFO', 'COO', 'CIO', 'CHRO', 'CMO']
};

// List of turnover reasons
const turnoverReasons = [
  'Better opportunity elsewhere',
  'Relocation',
  'Career change',
  'Retirement',
  'Work-life balance',
  'Salary/compensation',
  'Company culture',
  'Management issues',
  'Health reasons',
  'Layoff'
];

// Function to generate a random employee
const generateEmployee = (id: number): Employee => {
  // Randomly select a department
  const departmentOptions = Object.values(Department);
  const department = departmentOptions[randomBetween(0, departmentOptions.length - 1)];
  
  // Randomly select a job title based on department
  const availableTitles = jobTitles[department];
  const jobTitle = availableTitles[randomBetween(0, availableTitles.length - 1)];
  
  // Generate turnover status (10% chance of being inactive)
  const isActive = Math.random() > 0.1;
  const turnoverStatus: TurnoverStatus = isActive 
    ? { active: true }
    : { 
        active: false,
        dateLeft: randomDateInPastYear(),
        reason: turnoverReasons[randomBetween(0, turnoverReasons.length - 1)]
      };
  
  // Generate working hours
  const workingHours: WorkingHours = {
    average: 7 + Math.random() * 3, // Between 7-10 hours
    overtime: Math.random() * 10 // Between 0-10 hours
  };
  
  return {
    id,
    name: `Employee ${id}`, // Simple name for dummy data
    department,
    jobTitle,
    performanceRating: randomBetween(1, 5),
    attendancePercentage: 70 + Math.random() * 30, // Between 70% and 100%
    turnoverStatus,
    workingHours,
    engagementScore: randomBetween(1, 10)
  };
};

// Generate a dataset of employees
export const generateEmployeeData = (count: number = 5000): Employee[] => {
  const employees: Employee[] = [];
  
  for (let i = 1; i <= count; i++) {
    employees.push(generateEmployee(i));
  }
  
  return employees;
};

export default generateEmployeeData; 