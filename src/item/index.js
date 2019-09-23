import passport from 'passport';
import { Router } from 'express';

import getItems from './services/find';
import getItem from './services/findOne';
import createItem from './services/create';
import updateItem from './services/update';
import deleteItem from './services/delete';

const router = Router();

// Items
router.get('/', passport.authenticate('jwt'), getItems);

// Item
router.get('/:id', passport.authenticate('jwt'), getItem);
router.post('/', passport.authenticate('jwt'), createItem);
router.put('/:id', passport.authenticate('jwt'), updateItem);
router.delete('/:id', passport.authenticate('jwt'), deleteItem);

export default router;
