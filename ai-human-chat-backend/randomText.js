// randomText.js

const express = require('express');
const router = express.Router();

// Endpoint to generate random text
router.get('/random-text', (req, res) => {
  const randomText = generateRandomText(200); // Generate random text 200 characters long
  res.json({ text: randomText });
});

// Function to generate random text of specified length
function generateRandomText(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ';
  let randomText = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomText += characters.charAt(randomIndex);
  }
  return randomText;
}

module.exports = router;
