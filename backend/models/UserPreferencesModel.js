import db from '../db.js';

const UserPreferencesModel = {
    setUserPreferences: async (userId, preferences) => {
        const query = `INSERT INTO user_preferences (user_id, preferences) VALUES ($1, $2) RETURNING *`;
        const values = [userId, JSON.stringify(preferences)];
        const result = await db.query(query, values);
        return result.rows[0];
    },

    getUserPreferences: async (userId) => {
        const query = `SELECT * FROM user_preferences WHERE user_id = $1`;
        const result = await db.query(query, [userId]);
        return result.rows[0];
    }
};

export default UserPreferencesModel;
