import passport from 'passport';
import { Router } from 'express';

import getMenus from './services/find';
import getMenu from './services/findOne';
import createMenu from './services/create';
import updateMenu from './services/update';
import deleteMenu from './services/delete';

const router = Router();

// Menus
router.get('/:bars_id', passport.authenticate('jwt'), getMenus);

// Menu
router.get('/:id', passport.authenticate('jwt'), getMenu);
router.post('/', passport.authenticate('jwt'), createMenu);
router.put('/:id', passport.authenticate('jwt'), updateMenu);
router.delete('/:id', passport.authenticate('jwt'), deleteMenu);

export default router;
