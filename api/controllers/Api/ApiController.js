'use strict';

const jwt = require('jsonwebtoken');
var mongo = require('mongoose');
var User = mongo.model('user');
var UserOtp = mongo.model('user_otp');

//////Random Number Generate///////////////////
function between(min, max) {  
  return Math.floor(
    Math.random() * (max - min + 1) + min
    )
}


//////UpdateInsert at a time///////////////////

function upsert(values, condition) {
    return UserOtp
        .findOne({ where: condition })
        .then(function(obj) {
            // update
            if(obj)
                return obj.update(values);
            // insert
            return UserOtp.create(values);
        })
}

exports.send_otp = function(req, res, next) {
  var phone  = (req.body.phone) ? req.body.phone : "";
  if(phone != ""){
    var otp = between(1111, 9999);
    var expired_time = new Date(new Date().getTime() + 15*60000);;
    upsert({otp: otp,expired_time:expired_time,phone:phone},{phone:phone}).then(function(result) {
      res.status(200).json({
        result:true,
        message:"Otp Sent successfully",
      })
    });
  }
  else{
    return res.json({
      result:false,
      message:"Phone Number  required !",
    });
  } 
  
};
