// dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fs = require('fs')
const app = express();

app.use(bodyParser.json());

const port = 5000;

// routes
const productRouter = require('./routes/productRouter');
const userRouter = require('./routes/userRouter');
const shopRouter = require('./routes/storeRouter');

// configure mongo to use Promises
mongoose.Promise = Promise;
//---// connect to the db
mongoose.connect('mongodb://127.0.0.1:27017/Produccion', {
  useNewUrlParser: true,
})

.then(() => {
  console.log('Connected to MongoDB'); //connection Acoplished

  app.use('/api/products', productRouter);
  app.use('/api/user', userRouter);
  app.use('/api/shop', shopRouter);

  // start application
  app.listen(port, () => {
    console.log('Connected at', port);
  });
});
