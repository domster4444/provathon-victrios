const mongoose = require('mongoose');
const dhoDataTemplate = new mongoose.Schema({
  district: {
    type: String,
  },
  todaySingleVacUsed: {
    type: String,
    required: true,
  },
  todayDoubleVacUsed: {
    type: String,
    required: true,
  },
  totalSingleVacUsed: {
    type: String,
    required: true,
  },
  totalDoubleVacUsed: {
    type: String,
    required: true,
  },
  todayTotalVacUsed: {
    type: String,
    required: true,
  },
  totaVacUsedTillToday: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model('dhoData', dhoDataTemplate);
