import passport from 'passport';
import { Router } from 'express';

import getFavoriteBars from './services/find';
import getFavoriteBar from './services/findOne';
import createFavoriteBar from './services/create';
import deleteFavoriteBar from './services/delete';

const router = Router();

// FavoriteBars
router.get('/', passport.authenticate('jwt'), getFavoriteBars);

// FavoriteBar
router.get('/:bars_id', passport.authenticate('jwt'), getFavoriteBar);
router.post('/', passport.authenticate('jwt'), createFavoriteBar);
router.delete('/:id', passport.authenticate('jwt'), deleteFavoriteBar);

export default router;
