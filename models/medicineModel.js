const mongoose = require('mongoose');

const { Schema } = mongoose;

const medicineModel = new Schema({
  drugsstoreName: { type: String },
  medicineName: { type: String },
  concentration: { type: String },
  maker: { type: String },
  availablePresentation: { type: String },
  price: { type: Number }
});

module.exports = mongoose.model('Medicine', medicineModel);
