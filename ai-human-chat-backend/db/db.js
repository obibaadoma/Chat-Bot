// db/db.js

const pgp = require('pg-promise')();

// Database connection details
const connection = {
    host: 'localhost',
    port: 5432,
    database: 'Chat-Bot-Db',
    user: 'postgres',
    password: 'amdin'
};

// Create a database instance
const db = pgp(connection);

module.exports = db;
