var authController = require('../controller/authcontroller.js');
var flash = require('connect-flash');
 
 
module.exports = function(app, passport) {
 

 
 
    app.get('/login', authController.login);
 
     app.post('/login', passport.authenticate('local-login', {
            successRedirect: '/',
 
            failureRedirect: '/login'
        }
 
    ));

 
 
    app.get('/index', isLoggedIn, authController.index);
 
 
 
    app.get('/logout', authController.logout);
 
 
 
    function isLoggedIn(req, res, next) {
 
        if (req.isAuthenticated())
 
            return next();
 
        res.redirect('/');
 
    }
 
}