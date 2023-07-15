const mongoose = require('mongoose');
const findOrCreate = require('mongoose-findorcreate');

const itemSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  name: String,
  iconURL: String,
  data: Array
});

itemSchema.plugin(findOrCreate);
module.exports = mongoose.model('Item', itemSchema);