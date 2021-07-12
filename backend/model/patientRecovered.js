const mongoose = require('mongoose');
const patientRecovered = new mongoose.Schema({
  patientId: {
    type: String,
    required: true,
  },
  patientName: {
    type: String,
    required: true,
  },
  patientDoge: {
    type: String,
    required: true,
  },
  patientAddress: {
    type: String,
    required: true,
  },
  hospitalPhNo: {
    type: String,
    required: true,
  },

  hospitalDistrict: {
    type: String,
    required: true,
  },
  hospitalEmail: {
    type: String,
    required: true,
  },
  hospitalName: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('patientRecovered', patientRecovered);
