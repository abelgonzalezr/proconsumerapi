const mongoose = require('mongoose');

const { Schema } = mongoose;

const foodModel = new Schema({
  superMarkerName: { type: String },
  producDescription: { type: String },
  availablePresentation: { type: String },
  price: { type: Number }
});

module.exports = mongoose.model('Food', foodModel);
