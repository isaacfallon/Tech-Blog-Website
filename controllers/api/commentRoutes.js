// Routes file to handle comments

const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// GET all comments
router.get('/', async (req, res) => {
    try {
        const commentData = await Comment.findAll();

        res.status(200).json(commentData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }


});

// CREATE a new comment
router.post('/', async (req, res) => {
    try {
        const commentData = await Comment.create({
            content: req.body.content,
            post_id: req.body.post_id,
            user_id: req.session.user_id,
            creationDate: req.body.creationDate,
        });

        res.status(200).json(commentData);

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// DELETE a comment based on its ID
// router.delete('/:id', (req, res) => {
//     try {
//         const deletedComment = Comment.destroy({
//             where: {
//                 id: req.params.id
//             }
//         });
//         res.status(200).json(deletedComment);
//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//     }
// });

module.exports = router;