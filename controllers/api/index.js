const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const responseRoutes = require('./responseRoutes');

router.use('/users', userRoutes);
router.use('/response', responseRoutes);
router.use('/posts', postRoutes);

module.exports = router;
