const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");
const mongoose = require('mongoose');
const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id); //this is the auto generate id from mongodb
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user);
    });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true //heroku uses proxy and by default Strategy does not trust proxy
    },
    async (accessToken, refreshToken, profile, done) => {
      let user = await User.findOne({googleId: profile.id});
      if (!user) {
        user = await new User({ googleId: profile.id }).save()
      } 
      //first param is to error messages and the second is the user record
      done(null, user);
    }
  )
);
