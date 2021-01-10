const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const db = mongoose.connect(process.env.MONGO_URI);
const port = process.env.PORT || 3000;
const Medicine = require('./models/medicineModel');
const medicineRouter = require('./routes/medicineRouter')(Medicine);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', medicineRouter);
app.get('/', (req, res) => {
  res.send('welcome to my api');
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
