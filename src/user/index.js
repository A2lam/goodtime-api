import passport from 'passport';
import { Router } from 'express';

import getUsers from './services/find';
import getUser from './services/findOne';
import createUser from './services/create';
import updateUser from './services/update';
import deleteUser from './services/delete';

const router = Router();

// Users
router.get('/', passport.authenticate('jwt'), getUsers);

// User
router.get('/:id', passport.authenticate('jwt'), getUser);
router.post('/', createUser);
router.put('/:id', passport.authenticate('jwt'), updateUser);
router.delete('/:id', passport.authenticate('jwt'), deleteUser);

export default router;
