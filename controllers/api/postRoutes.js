const router = require('express').Router();
const { Post, User } = require('../../models');

// CREATE new blog post
router.post('/', async (req, res) => {
    try {
        const postData = await Post.create({
            title: req.body.title,
            content: req.body.content,
            user_id: req.session.user_id,
            creationDate: req.body.creationDate,
        });

        req.session.save(() => {
            req.session.post_id = postData.id;
            req.session.logged_in = true;

            res.status(200).json(postData);
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;