const express = require('express');
const bcrypt = require('bcrypt');

const { User } = require('../models/userModel');

const router = express.Router();

router.post('/', async (req, res) => {
   let user;

   user = await User.findOne({ email: req.body.email.toLowerCase() });
   if (!user) return res.status(400).send('Invalid email or password.')

   const validPassword = await bcrypt.compare(req.body.password, user.password);
   if (!validPassword) return res.status(400).send('Invalid email or password.')

   const { name, email, keywords, skills, gold, exp } = user

   try {
      res.header('x-auth-token', user.genToken()).status(200).send({ name, email, keywords, skills, gold, exp })
   } catch (err) {
      console.log(err.message);
      res.status(400).send(err.message);
   }
});

module.exports = router;