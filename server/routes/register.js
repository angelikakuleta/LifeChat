const express = require('express');
const bcrypt = require('bcrypt');

const { User } = require('../models/userModel');

const router = express.Router();

router.post('/', async (req, res) => {
   const { name, email, password } = req.body;
  
   let user = await User.findOne({ email: email.toLowerCase() });
   if (user) return res.status(400).send('User already registered.');

   user = new User({
      name: name,
      email: email.toLowerCase(),
      password: await bcrypt.hash(password, await bcrypt.genSalt(10))
   });

   try {
      const response = await user.save();
      const { name, email, keywords, skills, gold, exp } = response;

      res.header('x-auth-token', response.genToken()).status(200).send({ name, email, keywords, skills, gold, exp });
   } catch (err) {
      console.log(err.message);
      res.status(400).send(err.message);
   }
})

module.exports = router;