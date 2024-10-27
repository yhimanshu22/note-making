import db from '../db.js';

const VersionModel = {
    saveVersion: async (noteId, versionContent) => {
        const query = `INSERT INTO versions (note_id, version_content) VALUES ($1, $2) RETURNING *`;
        const values = [noteId, versionContent];
        const result = await db.query(query, values);
        return result.rows[0];
    },

    getVersionsByNoteId: async (noteId) => {
        const query = `SELECT * FROM versions WHERE note_id = $1`;
        const result = await db.query(query, [noteId]);
        return result.rows;
    },

    deleteVersion: async (id) => {
        const query = `DELETE FROM versions WHERE id = $1 RETURNING *`;
        const result = await db.query(query, [id]);
        return result.rows[0];
    }
};

export default VersionModel;
