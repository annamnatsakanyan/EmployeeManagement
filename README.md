# employee_management

## Overview
The Employee Management System is a simple web application that allows users to manage employee records. Users can create, read, update, and delete employee information through a user-friendly interface. The backend is built using Node.js and MySQL.

## Features
- **CRUD Operations**: Create, read, update, and delete employee records.
- **Express.js**: Node.js framework that make handling routes, requests, and responses easier.
- **Frontend**: Simple HTML interface for managing employee data.
- **Database**: MySQL database for persistent storage of employee records.

## Technologies Used
- **Backend**:
  - Node.js
  - Express.js
  - MySQL
  - mysql2 (for MySQL connections)
- **Frontend**:
  - HTML
  - JavaScript (for API calls)
- **Other**:
  - CORS (for handling cross-origin requests)
  - Body-parser (for parsing incoming request bodies)

## Getting Started

### Prerequisites
- Node.js (v18.16.0 or higher)
- npm (10.7.0 or higher)
- MySQL (ensure you have a MySQL server running)

### Installation

1. **Clone the repository**:
   git clone < https://github.com/annamnatsakanyan/EmployeeManagement.git>
   
   cd employee-management
   
Install dependencies:

* `npm install`
* `npm install express`
* `npm install cors`
* `npm install body-parser`
* `npm install mysql2`
* `Set up the MySQL database:`


### Create a database named employee_management:

  
  * Create a table named employees with the following schema:

  * Open mysql from command line: mysql -u root -p
    

    sql



    CREATE TABLE employees (

    
    id INT AUTO_INCREMENT PRIMARY KEY,

    
    name VARCHAR(255) NOT NULL,
    
    
    position VARCHAR(255) NOT NULL,
    
    
    salary DECIMAL(10, 2) NOT NULL

    );

  
  * Configure database connection:

    **Open the `db.js` file in the config directory and update the database connection settings if necessary (e.g., username, password).
  

### Run Command

`node index.js`

Access the application: Open your browser and navigate to `http://localhost:3000`. You should see the Employee Management interface.

 ### API Endpoints

* GET /employees: Retrieve a list of all employees.
* POST /employees: Create a new employee.
* PUT /employees/:id: Update an existing employee by ID.
* DELETE /employees/:id: Delete an employee by ID.

 ### Usage
* To add a new employee, fill out the form and click the "Add Employee" button.
* To update an employee, click the "Edit" button next to their name, modify the fields, and submit the changes.
* To delete an employee, click the "Delete" button next to their name.
