const {model, Schema} = require('mongoose');

const schema = new Schema({
    name:  String, 
    recipe:[{
      type:Schema.Types.ObjectId,
      ref:'Recipe'
    }]
  });
const Difficulty = model('Difficulty', schema);

module.exports = Difficulty;