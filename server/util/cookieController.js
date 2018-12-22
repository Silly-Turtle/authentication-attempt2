
const sessionController = require('./../session/sessionController');
const User = require('../user/userModel')
const cookieController = {};
cookieController.setCookie = setCookie;
cookieController.setSSIDCookie = setSSIDCookie;

/**
* setCookie - set a cookie with a random number
*
* @param req - http.IncomingRequest
* @param res - http.ServerResponse
* @param next - Callback with signature ([err])
*/
function setCookie(req, res, next) {
  //write code here
  res.cookie('codesmith', 'hi');
  res.cookie('secret', `${Math.floor(Math.random()*100)}`)
  next();
}

/**
* setSSIDCookie - store the supplied id in a cookie
*
* @param req - http.IncomingRequest
* @param res - http.ServerResponse
* @param next - Callback with signature ([err])
*/
function setSSIDCookie(req, res, next) {
  // write code here
  function cb() {
    next();
  }
  User.findOne(req.body, function(error, user) {
      res.cookie('ssid', user._id, {httpOnly: true});
      res.locals.cookieId = user._id
      cb();
  })
}

module.exports = cookieController;
