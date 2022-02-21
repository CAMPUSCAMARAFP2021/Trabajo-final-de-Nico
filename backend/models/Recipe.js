const {model, Schema} = require('mongoose');

const schema = new Schema({
    title:  String,
    description: String,
    duration: Number,
    amount: Number,
    ingredients: [{
      type: Schema.Types.ObjectId,
      ref: 'Ingredients'
    }],
    allergens: [{
      type: Schema.Types.ObjectId,
      ref: 'Allergens'
    }],
    difficulty: {
      type: Schema.Types.ObjectId,
      ref: 'Difficulty'
    },
    cookware: [{
      type: Schema.Types.ObjectId,
      ref: 'Cookware'
      }],
  }); 
const Recipe = model('Recipe', schema);

module.exports = Recipe;