const passport = require('passport');

module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
      prompt: 'select_account' //force to select account even when was before selected
    })
  );
  
  app.get(
    '/auth/google/callback',
    passport.authenticate("google"),
    (req, res) => {
      res.redirect('/surveys');
    }
  );
  
  app.get('/api/logout', (req, res) => {
    //req.logout() is add automatically by passport package
    req.logout();
    res.redirect('/');
  });

  app.get('/api/current-user', (req, res) => {
    //req.user is add automatically by passport package and has user information
    res.send(req.user);
  });
}
