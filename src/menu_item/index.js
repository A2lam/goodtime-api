import passport from 'passport';
import { Router } from 'express';

import getMenuItems from './services/find';
import createMenuItem from './services/create';
import deleteMenuItem from './services/delete';

const router = Router();

// MenuItems
router.get('/:menus_id', passport.authenticate('jwt'), getMenuItems);

// MenuItem
router.post('/', passport.authenticate('jwt'), createMenuItem);
router.delete('/:id', passport.authenticate('jwt'), deleteMenuItem);

export default router;
