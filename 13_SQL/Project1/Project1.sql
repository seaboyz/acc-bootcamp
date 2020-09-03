-- Task 1

-- Please find all employees that have a salary greater than 3000 and less than 4000 
SELECT * FROM employees
WHERE salary BETWEEN 3000 AND 4000;
--------------------------------------------------------------

-- Task 2

-- List the employees whose last name is longer than 6 characters.
-- In this query, return the first 6 characters of their last names, the jobs they perform and their salary.
SELECT SUBSTR(last_name,1,6), job_id, salary 
FROM employees
WHERE CHAR_LENGTH(last_name) > 6;
--------------------------------------------------------------

-- Task 3:

-- Please find all employees that have a salary greater than 80000, and those hired after 1996 (use implicit conversion of a date as a string to the DATE type).
SELECT * FROM employees
WHERE salary > 80000 
AND hire_date > '01/01/1996'

-- Create a separate query to find the lowest salary in the company (look for a SQL math function from references or Google search which allows you find the minimum in a set or a column).
SELECT MIN(salary) 
FROM employees;

-- In the first query you wrote above, please also report the employee's total compensation (salary + commission, if any) as a percentage of the minimum salary in the company from the #2 above.

-- COALESCE function that returns the first non-null argument
SELECT *, 
(salary * ( 1 + COALESCE(commission_pct, 0))) AS total_compensation
FROM employees
WHERE salary > 80000 
AND hire_date > '01/01/1996'
--------------------------------------------------------------

-- Tast 4

-- List the full names and their department names of the all employees in the "bootcamp" database. 
SELECT 
CONCAT(employees.first_name,' ', employees.last_name) AS full_name, 
departments.department_name
FROM employees
INNER JOIN departments
ON employees.department_id = departments.department_id;

-- Do the same for the employees that work for department "Sales". Order the results by hiring date with the most recent hires at the top.
SELECT 
CONCAT(employees.first_name,' ', employees.last_name) AS full_name, 
departments.department_name,
employees.hire_date
FROM employees
INNER JOIN departments
ON employees.department_id = departments.department_id
WHERE department_name = 'Sales'
ORDER BY hire_date DESC;
--------------------------------------------------------------

-- Tast 5
-- List the first, last, email, department name and city of all employees that are Execs.
SELECT 
employees.first_name AS FIRST,
employees.last_name AS LAST,
employees.email AS EMAIL,
departments.department_name AS DEPT,
locations.city AS CITY
FROM employees
INNER JOIN departments
      ON employees.department_id = departments.department_id
INNER JOIN locations
      ON departments.location_id = locations.location_id
WHERE departments.department_name = 'Executive'
--------------------------------------------------------------

-- Tast 6
-- To the above query, add the manager's first name to the column list.

SELECT 
employees_v1.first_name AS FIRST,
employees_v1.last_name AS LAST,
employees_v1.email AS EMAIL,
employees_v2.first_name AS MANAGER,
departments.department_name AS DEPT,
locations.city AS CITY
FROM employees AS employees_v1
JOIN employees AS employees_v2
     ON employees_v1.manager_id = employees_v2.employee_id
INNER JOIN departments
      ON employees_v1.department_id = departments.department_id
INNER JOIN locations
      ON departments.location_id = locations.location_id
WHERE departments.department_name = 'Executive'
--------------------------------------------------------------

-- Tast 7
-- To the above query, add the manager's first name to the column list.

SELECT EXTRACT(YEAR FROM hire_date) AS year_of_hiring,
COUNT(employee_id)
FROM hr.employees
GROUP BY year_of_hiring
HAVING COUNT(employee_id) > 1
ORDER BY year_of_hiring ASC





