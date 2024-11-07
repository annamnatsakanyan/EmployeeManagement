import { db } from '../config/db.js';

export class Employee {
    static getAll(callback) {
        db.query('SELECT * FROM employees', callback);
    }

    static create(employee, callback) {
        db.query('INSERT INTO employees (name, position, salary) VALUES (?, ?, ?)',
                 [employee.name, employee.position, employee.salary], callback);
    }
    
    static update(id, employee, callback) {
        db.query('UPDATE employees SET name = ?, position = ?, salary = ? WHERE id = ?',
                 [employee.name, employee.position, employee.salary, id], callback);
    }

    static delete(id, callback) {
        db.query('DELETE FROM employees WHERE id = ?', [id], callback);
    }
}