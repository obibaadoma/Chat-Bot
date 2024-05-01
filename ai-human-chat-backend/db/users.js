// db/users.js

// Import the database connection instance (db)
const db = require('./db');

// Function to create a new user
async function createUser(username, email, password) {
    try {
        const newUser = await db.one(`
            INSERT INTO users (username, email, password)
            VALUES ($1, $2, $3)
            RETURNING id, username, email
        `, [username, email, password]);
        return newUser;
    } catch (error) {
        throw new Error('Error creating user: ' + error.message);
    }
}

module.exports = {
    createUser
};
