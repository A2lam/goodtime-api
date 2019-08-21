import { Router } from 'express';

import createUser from './services/create';

const router = Router();

// Users

// User
router.post('/', createUser);

export default router;
