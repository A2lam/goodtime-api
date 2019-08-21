import { Router } from 'express';

import getUsers from './services/find';
import getUser from './services/findOne';
import createUser from './services/create';

const router = Router();

// Users
router.get('/', getUsers);

// User
router.get('/:id', getUser);
router.post('/', createUser);

export default router;
