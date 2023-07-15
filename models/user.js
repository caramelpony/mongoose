const mongoose = require('mongoose');
const findOrCreate = require('mongoose-findorcreate');

//Import Item type
const Item = require('./models/item');

const userSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  username: String,
  avatarURL: String,
  activeItem: Item,
  inventory: Array,
  data: Array
});

userSchema.plugin(findOrCreate);
module.exports = mongoose.model('User', userSchema);