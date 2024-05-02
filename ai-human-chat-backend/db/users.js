// db/users.js

// Database operations for users
const createUser = async (username, email, password) => {
  try {
    // Implementation to create a new user
    const newUser = await db.one(`
      INSERT INTO users (username, email, password)
      VALUES ($1, $2, $3)
      RETURNING id, username, email
    `, [username, email, password]);
    return newUser;
  } catch (error) {
    throw new Error('Error creating user: ' + error.message);
  }
};

const findUserByEmail = async (email) => {
  try {
    // Implementation to find a user by email
    const user = await db.oneOrNone('SELECT * FROM users WHERE email = $1', [email]);
    return user;
  } catch (error) {
    throw new Error('Error finding user by email: ' + error.message);
  }
};

module.exports = { createUser, findUserByEmail };
