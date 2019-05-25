const express = require('express');
const router = express.Router();

const { User } = require('../models/userModel');

router.post('/', async (req, res) => {
    let user;
    user = await User.findOne({ email: req.body.email.toLowerCase() });
    if (!user) return res.status(400).send('Invalid email or password.')
    console.log(req);
    try {
        let response = await User.findOneAndUpdate({ email: req.body.email.toLowerCase() }, { keywords: req.body.keywords })
        if (response) {
            console.log(response);
            res.send(200);
        }
    } catch (err) {

    }
})


module.exports = router;