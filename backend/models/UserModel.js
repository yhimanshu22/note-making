import { Pool } from 'pg';
import db from '../db.js';

const UserModel = {
    createUser: async (username, password, email) => {
        const query = `INSERT INTO users (username, password, email) VALUES ($1, $2, $3) RETURNING *`;
        const values = [username, password, email];
        const result = await db.query(query, values);
        return result.rows[0];
    },

    getUserById: async (id) => {
        const query = `SELECT * FROM users WHERE id = $1`;
        const result = await db.query(query, [id]);
        return result.rows[0];
    },

    getUserByUsername: async (username) => {
        const query = `SELECT * FROM users WHERE username = $1`;
        const result = await db.query(query, [username]);
        return result.rows[0];
    },

    updateUser: async (id, updates) => {
        const { username, password, email } = updates;
        const query = `UPDATE users SET username = $1, password = $2, email = $3 WHERE id = $4 RETURNING *`;
        const values = [username, password, email, id];
        const result = await db.query(query, values);
        return result.rows[0];
    },

    deleteUser: async (id) => {
        const query = `DELETE FROM users WHERE id = $1 RETURNING *`;
        const result = await db.query(query, [id]);
        return result.rows[0];
    }
};

export default UserModel;
