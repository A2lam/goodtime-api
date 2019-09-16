import passport from 'passport';
import { Router } from 'express';

import getEvents from './services/find';
import getEvent from './services/findOne';
import createEvent from './services/create';
import updateEvent from './services/update';
import deleteEvent from './services/delete';

const router = Router();

// Events
router.get('/', passport.authenticate('jwt'), getEvents);

// Event
router.get('/:id', passport.authenticate('jwt'), getEvent);
router.post('/', createEvent);
router.put('/:id', passport.authenticate('jwt'), updateEvent);
router.delete('/:id', passport.authenticate('jwt'), deleteEvent);

export default router;
