const mongoose = require('mongoose');
const hospitalDetailTemplate = new mongoose.Schema({
  hospitalCode: {
    type: String,
    required: true,
  },
  hospitalName: {
    type: String,
    required: true,
  },
  hospitalAddress: {
    type: String,
    required: true,
  },
  noOfOxyCyl: {
    type: String,
    required: true,
  },
  noOfVacBed: {
    type: String,
    required: true,
  },

  noOfSingleVaccinatedPatient: {
    type: String,
    required: true,
  },
  noOfDoubleVaccinatedPatient: {
    type: String,
    required: true,
  },
  noOfTripleVaccinatedPatient: {
    type: String,
    required: true,
  },
  noOfTotalCovidPatient: {
    type: String,
    required: true,
  },
  hospitalPhNo: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('allhospitaldetails', hospitalDetailTemplate);
