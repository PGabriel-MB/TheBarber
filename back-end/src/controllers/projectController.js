const express = require('express');

const authMiddlware = require('../middleware/auth');

const router = express.Router();

router.use(authMiddlware);

router.get('/', (req, res) => {
    res.send({ ok: true, user: req.userId });
});

module.exports = app => app.use('/projects', router);