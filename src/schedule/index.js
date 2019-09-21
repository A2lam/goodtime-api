import passport from 'passport';
import { Router } from 'express';

import getSchedules from './services/find';
import getSchedule from './services/findOne';
import createSchedule from './services/create';
import updateSchedule from './services/update';
import deleteSchedule from './services/delete';

const router = Router();

// Schedules
router.get('/', passport.authenticate('jwt'), getSchedules);

// Schedule
router.get('/:id', passport.authenticate('jwt'), getSchedule);
router.post('/', passport.authenticate('jwt'), createSchedule);
router.put('/:id', passport.authenticate('jwt'), updateSchedule);
router.delete('/:id', passport.authenticate('jwt'), deleteSchedule);

export default router;
