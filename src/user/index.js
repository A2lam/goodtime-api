import { Router } from 'express';

import getUsers from './services/find';
import getUser from './services/findOne';
import createUser from './services/create';
import updateUser from './services/update';
import deleteUser from './services/delete';

const router = Router();

// Users
router.get('/', getUsers);

// User
router.get('/:id', getUser);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;
