const {model, Schema} = require('mongoose');

const schema = new Schema({
    username:  String, 
    password:   String,
    email: String,
    recipes: [{
        type: Schema.Types.ObjectId,
        ref: 'Recipe'
      }]
  });

const User = model('User', schema);

module.exports = User;