const express = require('express');

const authMiddlware = require('../middleware/auth');
const User = require('../models/User');
const Service = require('../models/Service');
const Address = require('../models/Address');

const router = express.Router();

router.use(authMiddlware);

router.get('/:id', async (req, res) => {
    const _id = req.params.id;
    const address = await Address.findOne({ _id });
    res.send({ address });
});

router.post('/\')

module.exports = app => app.use('/addresses', router)