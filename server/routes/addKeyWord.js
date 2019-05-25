const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')

const { User } = require('../models/userModel');

router.get('/', auth, async (req, res) => {
    let user;
    user = await User.findById(req.user);
    if (user) {
        res.json(user.keywords);
    }

})

router.post('/', auth, async (req, res) => {
    let user;
    user = await User.findById(req.user);
    if (!user) return res.status(400).send('Invalid email or password.');
    try {
        user = await User.findByIdAndUpdate(req.user, { keywords: req.body.keywords })
        if (user) {
            user = await User.findById(req.user)
            res.json(user.keywords);
        }
    } catch (err) {
        res.status(400)
    }
})


module.exports = router;