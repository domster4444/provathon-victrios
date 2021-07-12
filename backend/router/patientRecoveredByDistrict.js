const express = require('express');
const router = express.Router();
//importing bcrypt module for comparing password in db

const patientRecoveredTemplate = require('../model/patientRecovered');

//?MODEL WANTS
// patientId
// patientName:
// patientDoge:
// patientAddress:
// hotpitalPhNo:
// hospitalDistrict:
// hospitalEmail:
// hospitalName:
//! =================================PLASMA PATIENT RECOVERED BY DISTRICT
router.post('/patient/recovered/district', (req, res) => {
  patientRecoveredTemplate
    .find({ patientAddress: req.body.data.district })
    .then((data) => {
      if (data) {
        console.log('--patientSearchByDistrict Plasma');
        console.log(data);
        return res.status(200).json({
          message: data,
        });
      } else {
        res.status(200).json({
          message: 'data not available for that district',
        });
        // ______________________SAVING REGISTERED USER DATA TO DB end
      }
    });
});
module.exports = router;
