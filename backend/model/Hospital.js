const mongoose = require('mongoose');
const hospitalRegistrationTemplate = new mongoose.Schema({
  code: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  licence: {
    required: true,
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model(
  'registeredhospitals',
  hospitalRegistrationTemplate
);
