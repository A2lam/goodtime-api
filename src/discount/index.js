import passport from 'passport';
import { Router } from 'express';

import getDiscounts from './services/find';
import getDiscount from './services/findOne';
import createDiscount from './services/create';
import deleteDiscount from './services/delete';

const router = Router();

// Discounts
router.get('/', passport.authenticate('jwt'), getDiscounts);

// Discount
router.get('/:id', passport.authenticate('jwt'), getDiscount);
router.post('/', passport.authenticate('jwt'), createDiscount);
router.delete('/:id', passport.authenticate('jwt'), deleteDiscount);

export default router;
