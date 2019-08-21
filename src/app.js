import express from 'express';
import passort from 'passport';
import bodyParser from 'body-parser';
import passport from 'passport/lib';
import http from 'http';
import cors from 'cors';

import authRouter from './auth/auth';
import userRouter from './user';

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

const server = http.createServer(app);

server.listen(process.env.PORT);

export default server;
