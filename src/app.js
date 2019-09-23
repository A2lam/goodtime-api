import express from 'express';
import passort from 'passport';
import bodyParser from 'body-parser';
import passport from 'passport/lib';
import http from 'http';
import cors from 'cors';

import authRouter from './auth/auth';
import userRouter from './user';
import barRouter from './bar';
import eventRouter from './event';
import fileRouter from './file';
import favoriteBarRouter from './favorite_bar';
import barPictureRouter from './bar_picture';
import groupRouter from './group';
import ratingRouter from './rating';
import goodTimeRouter from './good_time';
import scheduleRouter from './schedule';
import menuRouter from './menu';
import itemRouter from './item';
import menuItemRouter from './menu_item';

require('./auth/passport');

// Creating a new Express application
const app = express();

// Cors config
const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(bodyParser.json());

global.__basedir = __dirname;

// Initialize Passport and restore authentication state, if any, from the
// session.
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  done(null, 'user');
});
app.use(passort.initialize());
app.use(passort.session());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Login et logout
app.use('/api/user', authRouter);
// Users
app.use('/users', userRouter);
// Bars
app.use('/bars', barRouter);
// Events
app.use('/events', eventRouter);
// Files
app.use('/files', fileRouter);
// FavoriteBars
app.use('/favorite_bars', favoriteBarRouter);
// BarPictures
app.use('/bar_pictures', barPictureRouter);
// Groups
app.use('/groups', groupRouter);
// Ratings
app.use('/ratings', ratingRouter);
// GoodTimes
app.use('/good_times', goodTimeRouter);
// Schedules
app.use('/schedules', scheduleRouter);
// Menus
app.use('/menus', menuRouter);
// Items
app.use('/items', itemRouter);
// MenuItems
app.use('/menu_items', itemRouter);

const server = http.createServer(app);

server.listen(process.env.PORT);

export default server;
