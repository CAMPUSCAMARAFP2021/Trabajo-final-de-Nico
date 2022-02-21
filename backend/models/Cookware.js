const {model, Schema} = require('mongoose');

const schema = new Schema({
    name:  String, 
  });
const Cookware = model('Cookware', schema);

module.exports = Cookware;