const express = require('express');
const router = express.Router();
const patientRecoveredTemplate = require('../model/patientRecovered');
router.post('patient/recovered/district', (req, res) => {
  patientRecoveredTemplate
    .find({
      patientAddress: req.body.data.district,
    })
    .then((data) => {
      if (data) {
        console.log('_-patientSearchByDistrict Plasma');

        console.log(data);
        return res.status(200).json({
          message: data,
        });
      } else {
        res.status(200).json({
          message: 'data not available for that district',
        });
      }
    });
});
module.exports = router;
