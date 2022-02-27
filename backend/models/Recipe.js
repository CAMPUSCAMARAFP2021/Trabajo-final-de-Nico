const {model, Schema} = require('mongoose');

const schema = new Schema({
    title:  String,
    duration: Number,
    amount: Number,
    description: String,
    difficulty: String,
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
  }); 
const Recipe = model('Recipe', schema);

module.exports = Recipe;