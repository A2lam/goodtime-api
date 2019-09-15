import { Router } from 'express';
import jwt from 'jsonwebtoken';
import passport from 'passport';

const router = Router();

// Authentication
router.post('/login', (req, res, next) => {
  passport.authenticate('local', { failureRedirect: '/login' }, (err, user, info) => {
    console.log(err);
    if (err || !user) {
      return res.status(400).json({
        message: 'Nom d\'utilisateur ou Mot de passe incorrecte !',
        user,
      });
    }

    req.login(user, { session: true }, (err) => {
      if (err) {
        next(err);
      }

      // Generating token using user info
      const token = jwt.sign(user.toJSON(), process.env.SECRET_KEY, {
        expiresIn: 604800,
      });
      return res.json({ user, token });
    });
  })(req, res, next);
});

router.get('/logout', (req, res, next) => {
    req.logout();
    res.redirect('/');
});

export default router;
