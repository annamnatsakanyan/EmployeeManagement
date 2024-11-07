import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser'; 
import EmployeeController from './controller/EmployeeController.js';


const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.get('/employees', EmployeeController.getAll);
app.post('/employees', EmployeeController.create);
app.put('/employees/:id', EmployeeController.update);
app.delete('/employees/:id', EmployeeController.delete);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});