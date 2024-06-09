// const router = require('express').Router();
// const { User, Post } = require('../models');
// const withAuth = require('../utils/auth');

// router.get('/', async (req, res) => {
//     try {
//         const postData = await Post.findAll({
//             include: [
//                 {
//                     model: User,
//                     attributes: ['user']
//                 }
//             ]
//         })

//         const posts = postData.map((project) => project.get({ plain: true }));

//         res.render('dashboard', {
//             posts,
//             // TODO: Add a comment describing the functionality of this property
//             // Gives handlebars access to the boolean variable from 'req.session.logged_in' to conditionally render whether the user is logged in
//             // logged_in: req.session.logged_in,
//         });
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// module.exports = router;