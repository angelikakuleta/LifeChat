const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')

const { User } = require('../models/userModel');

router.get('/', auth, async (req, res) => {
    let user;
    user = await User.findById(req.user);
    if (!user) return res.status(400).send('Invalid email or password.')
    res.json(user.gold);
})

router.post('/', auth, async (req, res) => {
    let user;
    user = await User.findById(req.user);
    if (!user) return res.status(400).send('Invalid email or password.')
    try {
        let user = await User.findByIdAndUpdate(req.user,
            { $inc: { gold: req.body.gold } })
        if (user) {
            user = await User.findById(req.user);
            res.json(user.gold);
        }

    } catch (err) {
        res.status(400)
    }
})


module.exports = router;