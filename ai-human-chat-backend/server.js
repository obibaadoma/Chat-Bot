// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// Import database functions for user operations
const { createUser, findUserByEmail } = require('./db/users');

// Import database connection
const pgp = require('pg-promise')();
const db = pgp('postgres://postgres:admin@localhost:5432/Chat-Bot-Db');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// Google OAuth Strategy
passport.use(new GoogleStrategy({
  clientID: 'YOUR_CLIENT_ID',
  clientSecret: 'YOUR_CLIENT_SECRET',
  callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
  // Logic to authenticate user
}));

// Routes

// Google OAuth authentication route
app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Callback route after successful Google OAuth authentication
app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), (req, res) => {
  // Logic to handle successful authentication
  res.redirect('/');
});

// Route to register a new user
app.post('/api/auth/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await findUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ error: 'User with this email already exists' });
    }

    // Create a new user
    const newUser = await createUser(username, email, password);
    res.json(newUser);
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Additional routes for chat data storage and conversation forking can be added here

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
