INSERT INTO department (name)
VALUES ('Information Technology'),
('Sales'),
('Human Resources'),
('Customer Service'),
('Finance'),
('Marketing'),
('Operations'),
('Adminstrative');

INSERT INTO role (title, salary, department_id)
VALUES ('IT Support', 55000, 1),
('Systems Admin', 90000, 2),
('Sales Rep', 50000, 3),
('Sales Manager', 11000, 4),
('Recruiter', 60000, 5),
('Trainer', 55000, 6),
('Customer Service Rep', 35000, 7),
('Customer Service Manager', 60000, 8),
('Bookkeeper', 60000, 8),
('Auditor', 65000, 6),
('Marketing Research Analyst', 75000, 4),
('Social Media Manager', 60000, 5),
('Orgainzation Coordinator', 45000, 3),
('Operations Manager', 60000, 5),
('Administrative Assitant', 35000, 1),
('Administrative Supervisor', 55000, 8);



INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Nino', 'Gorgadze', 1, null),
('Ana', 'Kobakhidze', 2, 1),
('Anna', 'Gorgadze', 3, 2),
('Taia', 'Buchukuri', 4, null),
('Dwight', 'Kensington', 5, 3),
('Nia', 'Gorgadze', 6, 4),
('Marcus', 'Rashford', 7, 6),
('John', 'Smith', 8, 9),
('Kevin', 'Martin', 9, null),
('Roy', 'Orbison', 10, 8);



-- SELECT * FROM employee;