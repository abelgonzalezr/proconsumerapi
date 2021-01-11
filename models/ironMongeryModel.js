const mongoose = require('mongoose');

const { Schema } = mongoose;

const ironmongeryModel = new Schema({
  ironmongeryName: { type: String },
  producDescription: { type: String },
  brand: { type: String },
  unitMeasurement: { type: String },
  price: { type: Number }
});

module.exports = mongoose.model('ironmongeries', ironmongeryModel);
