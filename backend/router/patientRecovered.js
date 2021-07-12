const express = require('express');
const router = express.Router();
//importing bcyrpt module for comparing password in db

const patientRecoveredTemplate = require('../model/patientRecovered');
const patientRecovered = require('../middleware/patientRecovered');

//?MODEL WANTS
//patientId
//patient Name:
//patient Doge:
//patientAddress:
//hotpitalPhNo:
//hospitalDistrict:
// hospitalEmail:
// hospitalName:

router.post('/patient/recovered', patientRecovered, (req, res) => {
  const patientId = req.body.data.patientId;
  const patientName = req.body.data.patientName;
  const patientDoge = req.body.data.patienntDoge;
  const patientAddress = req.body.data.patientAddress;
  const hotpitalPhNo = req.body.data.hotpitalPhNo;
  const hospitalDistrict = req.body.data.hospitalDistrict;
  const hospitalEmail = req.body.data.hospitalemail;
  const hospitalName = req.body.data.hospitalName;
  //   _____________________________________to be saved patientDataToBeSavedBelow
  const patientData = {
    patientId: patientId,
    patientName: patientName,
    patientDoge: patientDoge,
    patientAddress: patientAddress,
    hotpitalPhNo: hotpitalPhNo,
    hospitalDistrict: hospitalDistrict,
    hospitalEmail: hospitalEmail,
    hospitalName: hospitalName,
  };

  //+++++++++++++++++++++++++++++++++++++++++++++++++++
  //?CHECK IF EMAIL ALREADY EXIST IN DB OR NOT
  patientRecoveredTemplate
    .findOne({
      patientId: req.body.data.patientId,
      hospitalName: req.body.data.hospitalName,
      hotpitalPhNo: req.body.data.hotpitalPhNo,
    })
    .then((data) => {
      if (data) {
        console.log('--PatientRecoveredRoute .then Data');
        console.log(data);
        return res.status(200).json({
          message: 'Patient already added',
        });
      } else {
        console.log('/patient recovered route triggered');

        //todo:------------save user to db with cluster name:
        //________________________________SAVING REGISTERED USER DATA TO DB start
        const registeredUserToBeSaved = new patientRecoveredTemplate(
          patientData
        );
        registeredUserToBeSaved
          .save()
          .then((data) => {
            res.status(200).json({
              message: 'patient Data Saved Successfully',
            });
          })
          .catch((error) => {
            res.json({
              message: 'err occured while saving Patient  (DB Err)',
            });
          });
      }
    });
});
module.exports = router;
