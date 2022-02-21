const {model, Schema} = require('mongoose');

const schema = new Schema({
    name:  String, 
  });
const Difficulty = model('Difficulty', schema);

module.exports = Difficulty;