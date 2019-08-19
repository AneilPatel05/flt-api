const express = require('express');

const authMiddleware = require('../middlewares/steemConnectAuth');
const links = require('./links');
const posts = require('./posts');
const users = require('./users');
const router = express.Router();

router.use('/links', links);
router.use('/posts', authMiddleware, posts);
router.use('/users', users);
module.exports = router;
