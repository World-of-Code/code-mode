'use strict'

const passport = require('passport')
const router = require('express').Router()
const YoutubeV3Strategy = require('passport-youtube-v3').Strategy
const { User } = require('../db/models')
module.exports = router


if (!process.env.YOUTUBE_CLIENT_ID || !process.env.YOUTUBE_CLIENT_SECRET) {

  console.log('Youtube client ID / secret not found. Skipping Youtube OAuth.')

} else {

  // const googleConfig = {
  //   clientID: process.env.GOOGLE_CLIENT_ID,
  //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  //   callbackURL: process.env.GOOGLE_CALLBACK
  // }

  // const strategy = new GoogleStrategy(googleConfig, (token, refreshToken, profile, done) => {
  //   const googleId = profile.id
  //   const name = profile.displayName
  //   const email = profile.emails[0].value

  //   User.find({ where: { googleId } })
  //     .then(foundUser => (foundUser
  //       ? done(null, foundUser)
  //       : User.create({name, email, googleId})
  //           .then(createdUser => done(null, createdUser))
  //     ))
  //     .catch(done)
  // })

  passport.use(new YoutubeV3Strategy({
    clientID: process.env.YOUTUBE_CLIENT_ID,
    clientSecret: process.env.YOUTUBE_CLIENT_SECRET,
    callbackURL: process.env.YOUTUBE_CALLBACK
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate({ 
      userId: profile.id 
    }, function (err, user) {
      return done(err, user);
    });
  }
))

  router.get('/', passport.authenticate('youtube', { scope: 'https://www.googleapis.com/auth/youtube' }))

  router.get('/callback', passport.authenticate('youtube', {
    successRedirect: '/home',
    failureRedirect: '/login'
  }))

}
