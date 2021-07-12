// const patientId = req.body.data.patientId;
// const patientName = req.body.data.patientName;
// const patientDoge = req.body.data.patientDoge;
// const patientAddress = req.body.data.patientAddress;
// const hotpitalPhNo = req.body.data.hotpitalPhNo;
// const hospitalDistrict = req.body.data.hospitalDistrict;
// const hospitalEmail = req.body.data.hospitalEmail;
// const hospitalName = req.body.data.hospitalName;
const Validator = require('validator');
const isEmpty = require('is-empty');
function patientRecovered(req, res, next) {
  console.log('___PatientRecovered Validator triggered______');

  let errors = {};

  const patientId = req.body.data.patientId;
  const patientName = req.body.data.patientName;
  const patientDoge = req.body.data.patientDoge;
  const patientAddress = req.body.data.patientAddress;
  const hotpitalPhNo = req.body.data.hotpitalPhNo;
  const hospitalDistrict = req.body.data.hospitalDistrict;
  const hospitalEmail = req.body.data.hospitalEmail;
  const hospitalName = req.body.data.hospitalName;

  //todo:---------------redeclaring variable for checking

  const mypatientid = !isEmpty(patientId) ? patientId : '';
  const mypatientname = !isEmpty(patientName) ? patientName : '';
  const mypatientdoge = !isEmpty(patientDoge) ? patientDoge : '';
  const mypatientaddress = !isEmpty(patientAddress) ? patientAddress : '';
  const myhotpitalphno = !isEmpty(hotpitalPhNo) ? hotpitalPhNo : '';
  const myhospitaldistrict = !isEmpty(hospitalDistrict) ? hospitalDistrict : '';
  const myhospitalemail = !isEmpty(hospitalEmail) ? hospitalEmail : '';
  const myhospitalname = !isEmpty(hospitalName) ? hospitalName : '';

  if (Validator.isEmpty(mypatientid)) {
    errors.message = 'patient ID field is required';
  }
  if (Validator.isEmpty(mypatientname)) {
    errors.message = 'Patient Name field is required';
  }

  if (Validator.isEmpty(mypatientdoge)) {
    errors.message = 'Patient Doge field is required';
  }
  if (Validator.isEmpty(mypatientaddress)) {
    errors.message = 'Patient address field is required';
  }
  if (Validator.isEmpty(myhotpitalphno)) {
    errors.message = 'hospital phone no field is required';
  }
  if (Validator.isEmpty(myhospitaldistrict)) {
    errors.message = 'Patient District  field is required';
  }
  if (Validator.isEmpty(myhospitalemail)) {
    errors.message = 'hospital email field is required';
  }
  if (Validator.isEmpty(myhospitalname)) {
    errors.message = 'hospital name field is required';
  }

  if (errors.message) {
    res.status(200).json({
      message: errors.message,
    });
  } else {
    next();
    console.log('_login validation completed_');
  }
}
module.exports = patientRecovered;
