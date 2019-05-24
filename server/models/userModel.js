const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
   name: { type: String, required: true },
   email: { type: String, required: true },
   password: { type: String, required: true },
   keywords: { type: Array, default: [] },
   skills: { type: Array, default: [] },
   gold: { type: Number, default: 0 },
   exp: { type: Number, default: 0 },
});

userSchema.methods.genToken = () => {
   return jwt.sign({ _id: this._id }, 'test');
}

const User = mongoose.model('User', userSchema);

 module.export = User;