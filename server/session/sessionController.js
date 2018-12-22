const Session = require('./sessionModel');
const express = require('express');

const sessionController = {};
const cookieParser = require('cookie-parser');
const app = express();
app.use(cookieParser());
/**
* isLoggedIn - find the appropriate session for this request in the database, then
* verify whether or not the session is still valid.
*
*
*/
sessionController.isLoggedIn = (req, res, next) => {
  // write code here
  console.log('***cookieParser: ', req.headers.cookie)
  // if () {
  //   res.redirect('/login')
  // }
  next();
};

/**
* startSession - create a new Session model and then save the new session to the
* database.
*
*
*/
sessionController.startSession = (req, res, next) => {
  //write code here
  const newSession = new Session({ cookieId: res.locals.cookieId })
  function cb() {
    next();
  }
  newSession.save(function (err) {
    console.log(err)
  }).then(next());
};

module.exports = sessionController;
