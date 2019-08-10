import express from 'express';
import http from 'http';

/*import passort from 'passport';
import bodyParser from 'body-parser';
import passport from 'passport/lib';
import cors from 'cors';

import employeeRouter from './employee';
import customerRouter from './customer';
import authRouter from './auth/auth';
import restaurantRouter from './restaurant';
import userStatusRouter from './userStatus';
import orderRouter from './order';
import menuRouter from './menu';
import orderMenuRouter from './orderMenu';
import orderProductRouter from './orderProduct';
import orderExtraRouter from './orderExtra';
import productRouter from './product';
import productTypeRouter from './productType';
import productMenuRouter from './productMenu';
import productExtraRouter from './productExtra';
import productIngredientRouter from './productIngredient';
import ingredientRouter from './ingredient';
import stockRouter from './stock';
import fileRouter from './file';

require('./auth/passport'); */

// Creating a new Express application
const app = express();

/* // Cors config
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
app.use(passort.session()); */

app.get('/', (req, res) => {
  res.send('Hello World!');
});

/* // Login et logout
app.use('/api/user', authRouter);
// Users
app.use('/employees', passport.authenticate('jwt'), employeeRouter);
// Customers
app.use('/customers', customerRouter);
// Restaurants
app.use('/restaurants', passport.authenticate('jwt'), restaurantRouter);
// Employee Statuses
app.use('/userStatuses', passport.authenticate('jwt'), userStatusRouter);
// Orders
app.use('/orders', passport.authenticate('jwt'), orderRouter);
// Menus
app.use('/menus', menuRouter);
// OrderMenus
app.use('/orderMenus', passport.authenticate('jwt'), orderMenuRouter);
// OrderProducts
app.use('/orderProducts', passport.authenticate('jwt'), orderProductRouter);
// OrderExtras
app.use('/orderExtras', passport.authenticate('jwt'), orderExtraRouter);
// Products
app.use('/products', productRouter);
// ProductTypes
app.use('/productTypes', productTypeRouter);
// ProductMenus
app.use('/menuProducts', passport.authenticate('jwt'), productMenuRouter);
//  ProductExtras
app.use('/productExtras', passport.authenticate('jwt'), productExtraRouter);
// ProductIngredients
app.use('/productIngredients', passport.authenticate('jwt'), productIngredientRouter);
// Ingredients
app.use('/ingredients', passport.authenticate('jwt'), ingredientRouter);
// Stock
app.use('/stocks', passport.authenticate('jwt'), stockRouter);
// File
app.use('/file', fileRouter);

// app.listen(process.env.PORT); */

const server = http.createServer(app);

server.listen(process.env.PORT);

export default server;
