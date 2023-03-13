const router = require('express').Router();
const { User, Post } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const userData = await Post.create({...req.body,userId:req.session.userId});

            res.status(200).json(userData);
        
    } catch (err) {
        res.status(400).json(err);
    }
});

// router.delete('/:id', withAuth, async (req, res) => {
//     try {
//         const postData = await Post.destroy({
//             where: {
//                 id: req.params.id,
//                 user_id: req.session.user_id,
//             },
//         });

//         if (!postData) {
//             res.status(404).json({ message: 'We can not find the post you are looking for ' });
//             return;
//         }

   
//         res.status(200).json(postData);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });
module.exports = router;
