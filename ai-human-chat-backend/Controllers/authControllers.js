// controllers/authController.js

const authController = {
  login: (req, res) => {
    // Check if user is already logged in
    if (req.user) {
      // Redirect to home page or dashboard if already logged in
      res.redirect('/');
    } else {
      // Render the login form
      res.render('login');
    }
  },
  logout: (req, res) => {
    // Logout the user
    req.logout();
    // Redirect to home page or login page after logout
    res.redirect('/');
  },
  register: (req, res) => {
    // Render the registration form
    res.render('register');
  },
};

module.exports = authController;
