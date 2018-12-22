const User = require('./userModel');
const cookieController = require('./../util/cookieController');
const sessionController = require('./../session/sessionController');

const userController = {};

/**
* getAllUsers
*
* @param next - Callback Function w signature (err, users)
*/
userController.getAllUsers = (next) => {
  User.find({}, next);
};

/**
* createUser - create a new User model and then save the user to the database.
*
* @param req - http.IncomingRequest
* @param res - http.ServerResponse
*/
userController.createUser = (req, res, next) => {
  const userInfo = {username, password} = req.body;
  const newUser = new User(userInfo);
  newUser.save(function (error) {
    if (error) {
      res.render('./../client/signup', {error})
    } else {
      next();
    }
  });
};

/**
* verifyUser - Obtain username and password from the request body, locate
* the appropriate user in the database, and then authenticate the submitted password
* against the password stored in the database.
*
* @param req - http.IncomingRequest
* @param res - http.ServerResponse
*/
userController.verifyUser = (req, res, next) => {
  // write code here
  User.findOne(req.body, function(error, user) {
    if (!user) {
      res.redirect('/signup');
    } else if (error) {
      console.log(error)
    } else {
      next();
    }
  });
};

module.exports = userController;
















//
