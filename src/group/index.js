import passport from 'passport';
import { Router } from 'express';

import getGroups from './services/find';
import getGroup from './services/findOne';
import createGroup from './services/create';
import updateGroup from './services/update';
import deleteGroup from './services/delete';

const router = Router();

// Groups
router.get('/:users_id', passport.authenticate('jwt'), getGroups);

// Group
router.get('/:id', passport.authenticate('jwt'), getGroup);
router.post('/', createGroup);
router.put('/:id', passport.authenticate('jwt'), updateGroup);
router.delete('/:id', passport.authenticate('jwt'), deleteGroup);

export default router;
