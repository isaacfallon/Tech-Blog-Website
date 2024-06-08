const withAuth = (req, res, next) => {
  // TODO: Add a comment describing the functionality of this if statement
  // This is a middleware utility we have created. 
  // If the user is not logged in and tries to navigate to the homepage, instead take them to the login page. Otherwise, continue to the homepage.
  if (!req.session.logged_in) {
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports = withAuth;