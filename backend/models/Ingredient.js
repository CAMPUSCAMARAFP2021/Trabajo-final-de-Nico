const {model, Schema} = require('mongoose');

const schema = new Schema({
    name:  String, 
  });
const Ingredient = model('Ingredient', schema);

module.exports = Ingredient;