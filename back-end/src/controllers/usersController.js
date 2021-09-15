const express = require('express');

const authMiddlware = require('../middleware/auth');
const User = require('../models/User');
const Service = require('../models/Service');
const Address = require('../models/Address');

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

router.get('/services/:id', async (req, res) => {
    /**
     * Here comes the user id to return all of de Service that he can offer
     */
    const _id = req.params.id;
    const user = await User.findOne({ _id });
    const services = await Service.find({ serviceProvider: _id });
    res.send({ user, services });
});

router.patch('/:id', async (req, res) => {
    /**
     *  Make the update of the user
     */
    try {
        const _id = req.params.id;
        const user_updated = await User.findOneAndUpdate(
            { _id },
            { ...req.body, updated: new Date() },
            { runValidators: true }
        );
        
        res.send({ user_updated });
    } catch (err) {
        return res.status(400).send({ error: 'Request failed!', err })
    }
});

module.exports = app => app.use('/users', router);