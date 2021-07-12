const Validator = require('validator');
const isEmpty = require('is-empty');

const hospitalDetailTemplate = require('../model/HospitalDetail');

function allHospitalValidator(req, res, next) {
  let errors = {};

  const hospitalCode = req.body.data.hospitalCode;
  const hospitalName = req.body.data.hospitalName;
  const hospitalAddress = req.body.data.hospitalAddress;
  const noOfOxyCyl = req.body.data.noOfOxyCyl;
  const noOfVacBed = req.body.data.noOfVacBed;
  const noOfSingleVaccinatedPatient = req.body.data.noOfSingleVaccinatedPatient;
  const noOfDoubleVaccinatedPatient = req.body.data.noOfDoubleVaccinatedPatient;
  const noOfTripleVaccinatedPatient = req.body.data.noOfTripleVaccinatedPatient;
  const noOfTotalCovidPatient = req.body.data.noOfTotalCovidPatient;
  const hospitalPhNo = req.body.data.hospitalPhNo;

  //general check
  //?renaming before check
  let myhospitalcode = !isEmpty(hospitalCode) ? hospitalCode : '';
  let myhospitalname = !isEmpty(hospitalName) ? hospitalName : '';
  let myhospitaladdress = !isEmpty(hospitalAddress) ? hospitalAddress : '';
  let mynoofoxycyl = !isEmpty(noOfOxyCyl) ? noOfOxyCyl : '';
  let mynoofvacbed = !isEmpty(noOfVacBed) ? noOfVacBed : '';

  const mynoOfsinglevaccinatedpatient = !isEmpty(noOfSingleVaccinatedPatient)
    ? noOfSingleVaccinatedPatient
    : '';
  const mynoOfdoublevaccinatedpatient = !isEmpty(noOfDoubleVaccinatedPatient)
    ? noOfDoubleVaccinatedPatient
    : '';
  const mynoOftriplevaccinatedpatient = !isEmpty(noOfTripleVaccinatedPatient)
    ? noOfTripleVaccinatedPatient
    : '';
  const mynoOftotalcovidpatient = !isEmpty(noOfTotalCovidPatient)
    ? noOfTotalCovidPatient
    : '';
  let myhospitalphno = !isEmpty(hospitalPhNo) ? hospitalPhNo : '';

  if (Validator.isEmpty(myhospitalcode)) {
    errors.message = 'hospital code field is required';
  }
  if (Validator.isEmpty(myhospitalname)) {
    errors.message = 'hospital name field is required';
  }
  if (Validator.isEmpty(myhospitaladdress)) {
    errors.message = 'hospital address field is required';
  }
  if (Validator.isEmpty(mynoofoxycyl)) {
    errors.message = 'hospital no of oxy cyl field is required';
  }
  if (Validator.isEmpty(mynoofvacbed)) {
    errors.message = 'hospital no of vac bed  field is required';
  }

  // -
  if (Validator.isEmpty(mynoOfsinglevaccinatedpatient)) {
    errors.message = 'no of single vaccinated patient field is required';
  }
  if (Validator.isEmpty(mynoOfdoublevaccinatedpatient)) {
    errors.message = 'no of double vaccinated patient field is required';
  }
  if (Validator.isEmpty(mynoOftriplevaccinatedpatient)) {
    errors.message = 'no of triple vaccinated patient field is required';
  }
  if (Validator.isEmpty(mynoOftotalcovidpatient)) {
    errors.message = 'no of total covid patient field is required';
  }
  if (Validator.isEmpty(myhospitalphno)) {
    errors.message = 'hospital ph no field is required';
  }

  if (errors.message) {
    res.send(errors);
  } else {
    next();
  }

  //if already submitted for first time
}
module.exports = allHospitalValidator;
