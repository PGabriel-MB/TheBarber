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

router.get('/user/:userId', async (req, res) => {
    const { userId } = req.params;

    try {
        const addresses = await Address.find({ serviceProvider: userId });

        return res.send(addresses);
    } catch (err) {
        return res.status(400).send({ error: 'Request failed!', err });
    }
});

router.post('/', async (req, res) => {
    const { userId } = req.body;

    if (!userId)
        return res.status(400).send({ error: 'Check if "userId" is being sent!' });
    
    try {
        const address =  await Address.create(req.body);

        return res.send(address);
    } catch (err) {
        return res.status(400).send({ error: 'Request Failed', err });
    }
});

router.patch('/:id', async (req, res) => {
    const address = req.body;
    const addressId = req.params.id;

    try {
        const address_updated = await Address.findOneAndUpdate(
            { _id: addressId },
            { $set: address },
            { runValidators: true, new: true }
        );

        return res.send({ address: address_updated, message: 'Address updated successfully!' });
    } catch (err) {
        return res.status(400).send({ error: 'Request Failed', err });
    }
});

module.exports = app => app.use('/addresses', router);