const express = require('express');
const router = express.Router();

const authMiddlware = require('../middleware/auth');
const Service = require('../models/Service');

router.use(authMiddlware);

router.post('/', async(req, res) => {
    /**
     *  Create a new service for the serviceProvider
     */
    try {
        const service = await Service.create(req.body);
        return res.send(service);
    } catch (err) {
        return res.status(400).send({ error: 'Request failed!', err })
    }
});

router.get('/:userId', async (req, res) => {
    /**
     *  Make the get of all services of the serviceProvider
     */
    const serviceProvider = req.params.userId;
    const services = await Service.find({ serviceProvider });
    res.send({ services });
});

module.exports = app => app.use('/services', router);
