const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')

const { User } = require('../models/userModel');

router.get('/', auth, async (req, res) => {
    let user;
    user = await User.findById(req.user);
    res.json(user.keywords);

})

router.post('/', async (req, res) => {
    let user;
    user = await User.findOne({ email: req.body.email.toLowerCase() });
    if (!user) return res.status(400).send('Invalid email or password.')
    try {
        let response = await User.findOneAndUpdate({ email: req.body.email.toLowerCase() }, { keywords: req.body.keywords })
        if (response) {
            console.log(response);
            res.json(user.keywords);
        }
    } catch (err) {
        res.status(400)
    }
})


module.exports = router;