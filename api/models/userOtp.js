'use strict';
var mongo = require('mongoose');
var Schema = mongo.Schema;


var UserOtpSchema = new Schema({
  phone: {
    type: String,
    required: '',
    default:null

  },
  otp: {
    type: String,
    required: '',
    default:null
  },
   expired_time: {
    type: String,
    default:null
    
  },
  created_at: {
    type: Date,
    default: Date.now
  },
   updated_at: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model('user_otp', UserOtpSchema);