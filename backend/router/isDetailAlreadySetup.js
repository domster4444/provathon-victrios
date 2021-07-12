const express = require('express');
const router = express.Router();
const hospitalDetailTemplate = require('../model/HospitalDetail');

router.post('/isAlreadySetup', (req, res) => {
  hospitalDetailTemplate
    .find({
      hospitalCode: req.body.data.code,
    })
    .then((result) => {
      if (result[0]) {
        res.status(200).json({
          message: 'Not allowedToShowModel',
        });
      } else {
        res.status(200).json({
          message: 'allowedToShowModel',
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
