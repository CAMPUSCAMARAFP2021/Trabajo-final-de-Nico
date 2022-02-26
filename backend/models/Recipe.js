const {model, Schema} = require('mongoose');

const schema = new Schema({
    title:  String,
    duration: Number,
    amount: Number,
    difficulty: {
      type: Schema.Types.ObjectId,
      ref: 'Difficulty'
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    description: String
  }); 
const Recipe = model('Recipe', schema);

module.exports = Recipe;