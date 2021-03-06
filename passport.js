const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const config = require('./config');

var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.jwtSecretKey;

passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    return done(null, jwt_payload.Id);
    // User.findOne({id: jwt_payload.sub}, function(err, user) {
    //     if (err) {
    //         return done(err, false);
    //     }
    //     if (user) {
    //         return done(null, user);
    //     } else {
    //         return done(null, false);
    //         // or you could create a new account
    //     }
    // });
}));