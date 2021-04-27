const express = require('express');

const authMiddlware = require('../middleware/auth');
const User = require('../models/User');

const router = express.Router();

router.use(authMiddlware);

router.get('/', async (req, res) => {
    const users = await User.find();
    res.send({ users });
});

router.get('/:id', async (req, res) => {
    const _id = req.params.id;
    const user = await User.findOne({ _id });
    res.send({ user });
});

module.exports = app => app.use('/users', router);