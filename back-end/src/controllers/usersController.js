const express = require('express');

const authMiddlware = require('../middleware/auth');
const User = require('../models/User');

const router = express.Router();

router.use(authMiddlware);

router.get('/', (req, res) => {
    const users = User.find()
    res.send({ users });
});

module.exports = app => app.use('/users', router);