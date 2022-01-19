'use strict';
var mongo = require('mongoose');
var Schema = mongo.Schema;


var UserSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name'
  },
  email: {
    type: String,
    required: 'Kindly enter the email'
  },
  phone: {
    type: String,
    required: 'Kindly enter the phone'
  },
  password: {
    type: String,
    //required: 'Kindly enter the password'
  },
  created_at: {
    type: Date,
    default: Date.now
  },
   updated_at: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    default: '1'
  },
});

module.exports = mongoose.model('user', UserSchema);