import passport from 'passport';
import { Router } from 'express';

import getFavoriteBars from './services/find';
import createFavoriteBar from './services/create';
import deleteFavoriteBar from './services/delete';

const router = Router();

// FavoriteBars
router.get('/:users_id', passport.authenticate('jwt'), getFavoriteBars);

// FavoriteBar
router.post('/', createFavoriteBar);
router.delete('/:id', passport.authenticate('jwt'), deleteFavoriteBar);

export default router;
