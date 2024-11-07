import { createConnection } from 'mysql2';

export const db = createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Anna*1425',
    database: 'employee_management',
});

db.connect(err => {
    if (err) throw err;
    console.log('MySQL Connected...');
});