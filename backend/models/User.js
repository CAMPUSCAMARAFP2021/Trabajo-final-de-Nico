const {model, Schema} = require('mongoose');

const schema = new Schema({
    recipes: [{
        type: Schema.Types.ObjectId,
        ref: 'Reciepe'
      }],
    username:  String, 
    password:   String,
    email: String, 
  });
const User = model('User', schema);

module.exports = User;