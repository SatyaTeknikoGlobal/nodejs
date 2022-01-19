module.exports = function(app){

  var api_controller = require('../controllers/Api/ApiController');


  app.group("/api/", (router) => {
    router.post("/send_otp", api_controller.send_otp);
    


    
  });



}