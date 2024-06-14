import { ConnectionPool } from 'mssql';

const dbConfig = {
    user: 'your_username',
    password: 'your_password',
    server: 'your_server',
    database: 'productDB',
    options: {
        encrypt: true, // Use true if you're on Windows Azure
        enableArithAbort: true
    }
};

const pool = new ConnectionPool(dbConfig);

export const connectDB = async () => {
    try {
        await pool.connect();
        console.log('Connected to the database');
    } catch (err) {
        console.error('Database connection failed:', err);
    }
};

export default pool;
