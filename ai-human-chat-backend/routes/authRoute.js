// routes/authRoutes.js

const express = require('express');
const router = express.Router();
const passport = require('passport');

// Google OAuth authentication route
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Callback route after successful Google OAuth authentication
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), (req, res) => {
  // Logic to handle successful authentication
  res.redirect('/');
});

module.exports = router;
