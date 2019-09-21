import passport from 'passport';
import { Router } from 'express';

import getBarPictures from './services/find';
import getBarPicture from './services/findOne';
import createBarPicture from './services/create';
import deleteBarPicture from './services/delete';

const router = Router();

// BarPictures
router.get('/:bars_id', getBarPictures);

// BarPicture
router.get('/:id', getBarPicture);
router.post('/', passport.authenticate('jwt'), createBarPicture);
router.delete('/:id', passport.authenticate('jwt'), deleteBarPicture);

export default router;
