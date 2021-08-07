// todaySingleVacUsed: todaySingleVacUsed,
// todayDoubleVacUsed: todayDoubleVacUsed,
// totalSingleVacUsed: totalSingleVacUsed,
// totalDoubleVacUsed: totalDoubleVacUsed,
// todayTotalVacUsed: todayTotalVacUsed,
// totaVacUsedTillToday: totalVacUsedTillToday,

const Validator = require('validator');
const isEmpty = require('is-empty');
function districtHealthDataValidator(req, res, next) {
  console.log('___districtHealthDataValidator Validator triggered______');

  let errors = {};

  const dhodistrict = req.body.data.dhodistrict;
  const todaySingleVacUsed = req.body.data.todaySingleVacUsed;
  const todayDoubleVacUsed = req.body.data.todayDoubleVacUsed;
  const totalSingleVacUsed = req.body.data.totalSingleVacUsed;
  const totalDoubleVacUsed = req.body.data.totalDoubleVacUsed;
  const todayTotalVacUsed = req.body.data.todayTotalVacUsed;
  const totaVacUsedTillToday = req.body.data.totaVacUsedTillToday;

  //todo:---------------redeclaring variable for checking

  const mytodaysinglevacused = !isEmpty(todaySingleVacUsed)
    ? todaySingleVacUsed
    : '';
  const mytodaydoublevacUsed = !isEmpty(todayDoubleVacUsed)
    ? todayDoubleVacUsed
    : '';
  const mytotalsinglevacUsed = !isEmpty(totalSingleVacUsed)
    ? totalSingleVacUsed
    : '';
  const mytotaldoublevacUsed = !isEmpty(totalDoubleVacUsed)
    ? totalDoubleVacUsed
    : '';
  const mytodaytotalvacused = !isEmpty(todayTotalVacUsed)
    ? todayTotalVacUsed
    : '';
  const mytotavacusedtilltoday = !isEmpty(totaVacUsedTillToday)
    ? totaVacUsedTillToday
    : '';
  const mydhodistrict = !isEmpty(dhodistrict) ? dhodistrict : '';

  if (Validator.isEmpty(mytodaysinglevacused)) {
    errors.message = 'today single vac used field is required ';
  }
  if (Validator.isEmpty(mytodaydoublevacUsed)) {
    errors.message = 'today double vac used';
  }

  if (Validator.isEmpty(mytotalsinglevacUsed)) {
    errors.message = 'total single vac used field is required';
  }
  if (Validator.isEmpty(mytotaldoublevacUsed)) {
    errors.message = 'total double vac used field is required';
  }
  if (Validator.isEmpty(mytodaytotalvacused)) {
    errors.message = 'today total vac used field is required';
  }
  if (Validator.isEmpty(mytotavacusedtilltoday)) {
    errors.message = 'total vac used till today field is required';
  }
  if (Validator.isEmpty(mydhodistrict)) {
    errors.message = 'dho district field is required';
  }

  if (errors.message) {
    res.status(200).json({
      message: errors.message,
    });
  } else {
    next();
    console.log('distirct health data validator validation completed_');
  }
}
module.exports = districtHealthDataValidator;
