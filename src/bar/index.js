import passport from 'passport';
import { Router } from 'express';

import getBars from './services/find';
import getBar from './services/findOne';
import createBar from './services/create';
import updateBar from './services/update';
import deleteBar from './services/delete';

const router = Router();

// Bars
router.get('/', passport.authenticate('jwt'), getBars);

// Bar
router.get('/:id', passport.authenticate('jwt'), getBar);
router.post('/', passport.authenticate('jwt'), createBar);
router.put('/:id', passport.authenticate('jwt'), updateBar);
router.delete('/:id', passport.authenticate('jwt'), deleteBar);

export default router;
