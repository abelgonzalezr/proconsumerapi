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
const medicineRouter = require('./routes/medicineRouter')(Medicine);
const foodRouter = require('./routes/foodRouter')(Food);


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', medicineRouter);
app.use('/api', foodRouter);
app.get('/', (req, res) => {
  res.send('welcome to my api');
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Running on port ${port}`);
});
