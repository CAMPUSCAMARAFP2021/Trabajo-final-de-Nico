const {model, Schema} = require('mongoose');

const schema = new Schema({
    name:  String, 
  });
const Allergen = model('Allergen', schema);

module.exports = Allergen;