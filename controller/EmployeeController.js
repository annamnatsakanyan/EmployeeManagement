import { Employee } from '../model/employee.js';

class EmployeeController {
    static getAll(req, res) {
        Employee.getAll((err, results) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.json(results);
        });
    }

    static create(req, res) {
        console.log(req.body);
        Employee.create(req.body, (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).send(err);
            }
            console.log(`Employee created with ID: ${result.insertId}`); 
            res.status(201).json({ id: result.insertId, ...req.body });
        });
    }
    
    static update(req, res) {
        const { id } = req.params;
        Employee.update(id, req.body, (err) => {
            if (err) {
                console.error(err);
                return res.status(500).send(err);
            }
            console.log(`Employee with ID: ${id} updated successfully`)
            res.status(204).send();
        });
    }

    static delete(req, res) {
        const { id } = req.params;
        Employee.delete(id, (err) => {
            if (err) {
                console.error(err);
                return res.status(500).send(err);
            }
            console.log(`Employee with ID: ${id} deleted successfully`)
            res.status(204).send();
        });
    }
}

export default EmployeeController;