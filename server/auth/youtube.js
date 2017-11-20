'use strict'

const passport = require('passport')
const router = require('express').Router()
const YoutubeV3Strategy = require('passport-youtube-v3').Strategy
const { User } = require('../db/models')
module.exports = router


if (!process.env.YOUTUBE_CLIENT_ID || !process.env.YOUTUBE_CLIENT_SECRET) {

  console.log('Youtube client ID / secret not found. Skipping Youtube OAuth.')

} else {

   const youtubeConfig = {
    clientID: process.env.YOUTUBE_CLIENT_ID,
    clientSecret: process.env.YOUTUBE_CLIENT_SECRET,
    callbackURL: process.env.YOUTUBE_CALLBACK
    // scope: ['https://www.googleapis.com/auth/youtube.readonly']
   }
//google id needs to be changed, but it is in db
  passport.use(new YoutubeV3Strategy(youtubeConfig, (token, refreshToken, profile, done) =>{
    console.log("hi",profile)
     const googleId = profile.id
     const email = profile.emails[0].value

     User.find({ where: { googleId } })
         .then(foundUser => (foundUser
           ? done(null, foundUser)
           : User.create({ email, googleId})
               .then(createdUser => done(null, createdUser))
         ))
         .catch(done)
     })
    );


  router.get('/', passport.authenticate('youtube', { scope: 'https://www.googleapis.com/auth/youtube' }))

  router.get('/callback', passport.authenticate('youtube', {
    successRedirect: '/home',
    failureRedirect: '/login'
  }))

}
