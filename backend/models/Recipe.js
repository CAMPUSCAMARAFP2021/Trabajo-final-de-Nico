const {model, Schema} = require('mongoose');

const schema = new Schema({
    title:  String,
    duration: Number,
    amount: Number,
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    description: String
  }); 
const Recipe = model('Recipe', schema);

module.exports = Recipe;