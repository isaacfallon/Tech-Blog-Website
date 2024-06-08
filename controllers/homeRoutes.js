const router = require('express').Router();
const { User, Post } = require('../models');
const withAuth = require('../utils/auth');

// TODO: Add a comment describing the functionality of the withAuth middleware
// When the user goes to the homepage, use the withAuth utility middleware to check if they're logged in (executes before anything in this block of code)
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      // order: [['title', 'ASC']],
    });

    const posts = postData.map((project) => project.get({ plain: true }));

    res.render('homepage', {
      posts,
      // TODO: Add a comment describing the functionality of this property
      // Gives handlebars access to the boolean variable from 'req.session.logged_in' to conditionally render whether the user is logged in
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // TODO: Add a comment describing the functionality of this if statement
  // If the user is logged in and the user attempts to go to the /login page, take them instead to the main page.
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  // TODO: Add a comment describing the functionality of this if statement
  // If the user is logged in and the user attempts to go to the /login page, take them instead to the main page.
  // if (req.session.logged_in) {
  //   res.redirect('/');
  //   return;
  // }

  res.render('signup');
});

router.get('/dashboard', withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['user', 'ASC']],
    });

    const users = userData.map((project) => project.get({ plain: true }));

    res.render('dashboard', {
      users,
      // TODO: Add a comment describing the functionality of this property
      // Gives handlebars access to the boolean variable from 'req.session.logged_in' to conditionally render whether the user is logged in
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;