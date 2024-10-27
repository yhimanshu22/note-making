import db from '../db.js';

const CommentModel = {
    addComment: async (noteId, userId, content) => {
        const query = `INSERT INTO comments (note_id, user_id, content) VALUES ($1, $2, $3) RETURNING *`;
        const values = [noteId, userId, content];
        const result = await db.query(query, values);
        return result.rows[0];
    },

    getCommentsByNoteId: async (noteId) => {
        const query = `SELECT * FROM comments WHERE note_id = $1`;
        const result = await db.query(query, [noteId]);
        return result.rows;
    },

    deleteComment: async (id) => {
        const query = `DELETE FROM comments WHERE id = $1 RETURNING *`;
        const result = await db.query(query, [id]);
        return result.rows[0];
    }
};

export default CommentModel;
