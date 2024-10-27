// db.js
import pkg from 'pg';  // Use default import
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

// Destructure Pool from the imported pkg
const { Pool } = pkg;

// Create a PostgreSQL connection pool
const pool = new Pool({
    user: process.env.DB_USER,
    host: 'postgres',  // Use the service name defined in docker-compose
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: 5432,
});

// Function to connect to the database
export const connectDB = async () => {
    try {
        await pool.connect();
        console.log('Connected to PostgreSQL database');
    } catch (err) {
        console.error('Database connection error:', err.stack);
        throw err; // Rethrow the error to handle it later
    }
};

// Export the pool for use in other modules
export default pool;
