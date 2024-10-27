import db from '../db.js';

const NoteModel = {
    createNote: async (userId, content) => {
        const query = `INSERT INTO notes (user_id, content) VALUES ($1, $2) RETURNING *`;
        const values = [userId, content];
        const result = await db.query(query, values);
        return result.rows[0];
    },

    getNoteById: async (id) => {
        const query = `SELECT * FROM notes WHERE id = $1`;
        const result = await db.query(query, [id]);
        return result.rows[0];
    },

    getAllNotesByUserId: async (userId) => {
        const query = `SELECT * FROM notes WHERE user_id = $1`;
        const result = await db.query(query, [userId]);
        return result.rows;
    },

    updateNote: async (id, content) => {
        const query = `UPDATE notes SET content = $1 WHERE id = $2 RETURNING *`;
        const values = [content, id];
        const result = await db.query(query, values);
        return result.rows[0];
    },

    deleteNote: async (id) => {
        const query = `DELETE FROM notes WHERE id = $1 RETURNING *`;
        const result = await db.query(query, [id]);
        return result.rows[0];
    }
};

export default NoteModel;
