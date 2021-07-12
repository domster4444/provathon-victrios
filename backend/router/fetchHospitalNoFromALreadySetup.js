// find hospital no ... frmo HospitalDetail.js(initialSetupHospitalDetail-cluster)
const express = require('express');
const router = express.Router();
const hospitalDetail = require('../model/HospitalDetail');

router.post('/fetchhospitalno', (req, res) => {
  hospitalDetail
    .find({
      hospitalCode: req.body.data.code,
    })
    .then((result) => {
      if (result[0]) {
        res.status(200).json({
          message: result[0].hospitalPhNo,
        });
      } else {
        res.status(200).json({
          message:
            'please set up your initial data , hospital ph no could not be fetched while saving recovered patient data',
        });
      }
    })
    .catch((error) => {
      res.status(200).json({
        message: 'error occured while checking',
      });
    });
});

module.exports = router;
