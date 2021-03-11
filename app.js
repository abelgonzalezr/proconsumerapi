const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
// eslint-disable-next-line no-unused-vars
const db = mongoose.connect(process.env.MONGO_URI);
const port = process.env.PORT || 3000;
const Medicine = require('./models/medicineModel');
const Food = require('./models/foodModel');
const IronMongery = require('./models/ironMongeryModel');
const medicineRouter = require('./routes/medicineRouter')(Medicine);
const foodRouter = require('./routes/foodRouter')(Food);
const ironMongeryRouter = require('./routes/ironMongeryRouter')(IronMongery);
const indexRouter = require('./routes/indexRouter');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', medicineRouter);
app.use('/api', foodRouter);
app.use('/api', ironMongeryRouter);
app.get('/', indexRouter);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Running on port ${port}`);
});
