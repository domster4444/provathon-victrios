const Validator = require('validator');
const isEmpty = require('is-empty');
function patientRecovered(req, res, next) {
  console.log('___patientrecovered validator triggered____');

  let errors = {};
  const patientId = req.body.data.patientId;
  const patientName = req.body.data.patientName;
  const patientDoge = req.body.data.patientDoge;
  const patientAddress = req.body.data.patientAddress;
  const hotpitalPhNo = req.body.data.hotpitalPhNo;
  const hospitalDistrict = req.body.data.hospitalDistrict;
  const hospitalEmail = req.body.data.hospitalEmail;
  const hospitalName = req.body.data.hospitalNamel;

  // redeclaring for validation
  const mypatientid = !isEmpty(patientId) ? patientId : '';
  const mypatientname = !isEmpty(patientName) ? patientName : '';
  const mypatientdoge = !isEmpty(patientDoge) ? patientDoge : '';
  const mypatientaddress = !isEmpty(patientAddress) ? patientAddress : '';
  const myhotpitalphno = !isEmpty(hotpitalPhNo) ? hotpitalPhNo : '';
  const myhospitaldistrict = !isEmpty(hospitalDistrict) ? hospitalDistrict : '';
  const myhospitalemail = !isEmpty(hospitalEmail) ? hospitalEmail : '';
  const myhospitalname = !isEmpty(hospitalName) ? hospitalName : '';

  if (Validator.isEmpty(mypatientid)) {
    errors.message = 'patient Id Field is required';
  }
  if (Validator.isEmpty(mypatientname)) {
    errors.message = 'patient name field is required';
  }
  if (Validator.isEmpty(mypatientdoge)) {
    errors.message = ' patient doge field is required';
  }

  if (Validator.isEmpty(mypatientaddress)) {
    errors.message = ' patient address field is required';
  }
  if (Validator.isEmpty(myhotpitalphno)) {
    errors.message = ' patient address field is required';
  }
  if (Validator.isEmpty(myhospitaldistrict)) {
    errors.message = ' patient address field is required';
  }
  if (Validator.isEmpty(myhospitalemail)) {
    errors.message = ' patient address field is required';
  }
  if (Validator.isEmpty(myhospitalname)) {
    errors.message = ' patient address field is required';
  }
  if (errors.message) {
    res.satus(200).json({
      message: errors.message,
    });
  } else {
    next();
    console.log('login validation complete');
  }
}

module.exports = patientRecovered;
