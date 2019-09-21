import passport from 'passport';
import { Router } from 'express';

import getGoodTimes from './services/find';
import getGoodTime from './services/findOne';
import createGoodTime from './services/create';
import deleteGoodTime from './services/delete';

const router = Router();

// GoodTimes
router.get('/:users_id', passport.authenticate('jwt'), getGoodTimes);

// GoodTime
router.get('/:id', passport.authenticate('jwt'), getGoodTime);
router.post('/', passport.authenticate('jwt'), createGoodTime);
router.delete('/:id', passport.authenticate('jwt'), deleteGoodTime);

export default router;
