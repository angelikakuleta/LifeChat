const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')

const { User } = require('../models/userModel');

router.get('/', auth, async (req, res) => {
    let user;
    user = await User.findById(req.user);
    res.json(user.gold);

})

router.post('/', async (req, res) => {
    let user;
    user = await User.findOne({ email: req.body.email.toLowerCase() });
    if (!user) return res.status(400).send('Invalid email or password.')
    console.log(req);
    try {
        let user = await User.findOneAndUpdate({ email: req.body.email.toLowerCase() },
            { $inc: { gold: req.body.gold } })
        if (user) {
            console.log(user);
            res.json(user.gold);
        }
    } catch (err) {
        res.status(400)
    }
})


module.exports = router;