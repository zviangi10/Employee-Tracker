//Connection pool to db.
const connection = require('./connection');
//class contructor object for async await db connection
class DatabaseConnection {
    constructo() {

    }
   async query(query, args = []) {
    const link = await connection.connect()
    const result = await link.query(query, args)
    link.release()
    return result;
   }

   //Display all query
   findAllDepartments() {
    return this.query(`SELECT * FROM department`)
   }

   //Query to connect all employee relationships and display all employee data
   findAllEmployees() {
    return this.query(`SELECT employee.id, employee.first_name, employee.last_name, role.title AS role_name, role.salary, manager.first_name AS manager_first, manager.last_name AS manager_last FROM employee
            JOIN role ON employee.role_id = role.id
            JOIN employee AS manager ON employee.manager_id = manager.id`)
   }

   // Query to display all employee roles.
   findAllRoles() {
    return this.query(`SELECT role.id, role.title, role.salary, department.name FROM role
        JOIN department ON role.department_id = department.id`)
}
// Query to add a new department to db.
addDepartment(department) {
    return this.query(`INSERT INTO department (name) VALUES ($1)`, [department.name])
}

// Query to add a new role to db.
addRole(role) {
    return this.query(`INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)`, [role.title, role.salary, role.department_id])
}

// Query to add a new employee to db.
addEmployee(employee) {
   return this.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)`, [employee.first_name, employee.last_name, employee.role_id, employee.manager_id])
}

}

module.exports = new DatabaseConnection();

