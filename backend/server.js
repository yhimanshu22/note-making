// server.js
import express from 'express';
import { connectDB } from './db.js'; // Import the connectDB function

const app = express();
const port = process.env.PORT || 5000;

// Connect to the database
connectDB().catch(err => {
    console.error('Failed to connect to the database');
    process.exit(1); // Exit the process on failure
});

// Middleware to parse JSON requests
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
    res.send('Hello, World! Your backend is working!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
