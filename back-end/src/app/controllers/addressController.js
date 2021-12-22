const express = require('express');

const authMiddlware = require('../middleware/auth');
const Address = require('../models/Address');

const router = express.Router();

router.use(authMiddlware);

router.get('/:id', async (req, res) => {
    const _id = req.params.id;
    const address = await Address.findOne({ _id });
    res.send({ address });
});

router.post('/', async (req, res) => {
    /**
     * Creates a new Address
     * this endpoint will probably be less used
     */
    try {
        const address =  await Address.create(req.body);
        return res.send(address);
    } catch (err) {
        return res.status(400).send({ error: 'Request Failed', err });
    }
});

module.exports = app => app.use('/addresses', router)