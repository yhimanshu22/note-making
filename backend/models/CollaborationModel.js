import db from '../db.js';

const CollaborationModel = {
    addCollaboration: async (noteId, userId) => {
        const query = `INSERT INTO collaborations (note_id, user_id) VALUES ($1, $2) RETURNING *`;
        const values = [noteId, userId];
        const result = await db.query(query, values);
        return result.rows[0];
    },

    getCollaboratorsByNoteId: async (noteId) => {
        const query = `SELECT * FROM collaborations WHERE note_id = $1`;
        const result = await db.query(query, [noteId]);
        return result.rows;
    },

    removeCollaboration: async (id) => {
        const query = `DELETE FROM collaborations WHERE id = $1 RETURNING *`;
        const result = await db.query(query, [id]);
        return result.rows[0];
    }
};

export default CollaborationModel;
