const express = require('express');
const router = express.Router();

const { User } = require('../models/userModel');

router.post('/', async (req, res) => {
    let user;
    console.log(User);
    // user = await User.findOne({ email: req.body.email.toLowerCase() });
    if (!user) return res.status(400).send('Invalid email or password.')

    try {
        let response = await User.findOneAndUpdate({ email: req.body.email.toLowerCase() }, { keywords: req.body.keywords })
            (response) ? res.send(200) : res.send(404);
    } catch (err) {

    }
})


module.exports = router;