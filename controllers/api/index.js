const router = require('express').Router();
const userRoutes = require('./userRoutes');
// const projectRoutes = require('./projectRoutes');
const commentsRoutes = require('./commentsRoutes');
const postRoutes = require('./postRoutes');

router.use('/users', userRoutes);
 router.use('/post', postRoutes);
 router.use('/comments', commentsRoutes);
module.exports = router;
