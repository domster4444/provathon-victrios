const Validator = require('validator');
const isEmpty = require('is-empty');
function districtHealthDataValidator(req, res, next) {
  console.log('___districtHealthDataValidator Validator triggered______');

  let errors = {};

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

  if (Validator.isEmpty(mytodaysinglevacused)) {
    errors.message = 'patient ID field is required';
  }
  if (Validator.isEmpty(mytodaydoublevacUsed)) {
    errors.message = 'Patient Name field is required';
  }

  if (Validator.isEmpty(mytotalsinglevacUsed)) {
    errors.message = 'Patient Doge field is required';
  }
  if (Validator.isEmpty(mytotaldoublevacUsed)) {
    errors.message = 'Patient address field is required';
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
