import passport from 'passport';
import { Router } from 'express';

import getEvents from './services/find';
import getEventsByBar from './services/findByBar';
import getEvent from './services/findOne';
import createEvent from './services/create';
import updateEvent from './services/update';
import deleteEvent from './services/delete';

const router = Router();

// Events
router.get('/', passport.authenticate('jwt'), getEvents);
router.get('/bar/:bars_id', passport.authenticate('jwt'), getEventsByBar());

// Event
router.get('/:id', passport.authenticate('jwt'), getEvent);
router.post('/', createEvent);
router.put('/:id', passport.authenticate('jwt'), updateEvent);
router.delete('/:id', passport.authenticate('jwt'), deleteEvent);

export default router;
