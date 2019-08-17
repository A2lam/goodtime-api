import passport from 'passport';
import passportLocal from 'passport-local';
import passportJWT from 'passport-jwt';
import md5 from 'md5';
import models from '../../models';

const LocalStrategy = passportLocal.Strategy;
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

const opts = {};
opts.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRET_KEY;

passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
  },
  ((login, password, done) => {
    return models.User.findOne({
      where: {
        username: login,
        password: md5(password),
      }
    }).then((user) => {
      if (!user) {
        return done(null, false, { message: 'Nom d\'utilisateur ou Mot de passe incorrecte.' });
      }

      // Password retirement from the user returned object
      user.password = "";

      return done(null, user, {
        message: 'Connecté avec succès',
      });
    }).catch((err) => {
      return done(err);
    });
  })
));

passport.use(new JWTStrategy(
  opts,
  ((jwtPayload, done) => {
    return models.User.findOne({
      where: {
        username: jwtPayload.username
      }
    }).then((user) => {
      if (!user) {
        return done(null, false, { message: 'Unauthorized' });
      }

      return done(null, user);
    }).catch(err => done(err));
  }),
));
