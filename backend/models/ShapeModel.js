import db from '../db.js';

const ShapeModel = {
    addShape: async (noteId, shapeData) => {
        const query = `INSERT INTO shapes (note_id, shape_data) VALUES ($1, $2) RETURNING *`;
        const values = [noteId, JSON.stringify(shapeData)];
        const result = await db.query(query, values);
        return result.rows[0];
    },

    getShapesByNoteId: async (noteId) => {
        const query = `SELECT * FROM shapes WHERE note_id = $1`;
        const result = await db.query(query, [noteId]);
        return result.rows;
    },

    deleteShape: async (id) => {
        const query = `DELETE FROM shapes WHERE id = $1 RETURNING *`;
        const result = await db.query(query, [id]);
        return result.rows[0];
    }
};

export default ShapeModel;
