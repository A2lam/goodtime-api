import passport from 'passport';
import { Router } from 'express';

import getRatings from './services/find';
import getRating from './services/findOne';
import createRating from './services/create';
import deleteRating from './services/delete';

const router = Router();

// Ratings
router.get('/', passport.authenticate('jwt'), getRatings);

// Rating
router.get('/:id', passport.authenticate('jwt'), getRating);
router.post('/', createRating);
router.delete('/:id', passport.authenticate('jwt'), deleteRating);

export default router;
