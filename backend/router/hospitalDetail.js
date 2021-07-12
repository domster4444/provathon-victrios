const express = require('express');
const router = express.Router();
const hospitalDetailTemplate = require('../model/HospitalDetail');

//TODO: VALIDATOR allHospitalDetailValidator
const allHospitalDetailValidator = require('../middleware/allHospitalDetailValidator');

router.post('/hospitalresourcedetail', (req, res) => {
  //___general validation stage
  hospitalDetailTemplate
    .findOne({
      hospitalCode: req.body.data.hospitalCode,
    })
    .then((exist) => {
      if (exist) {
        console.log(`________________________DATA ALREADY EXIST ${exist}`);
        res.status(200).json({
          message:
            'allhospitaldetails is already setup , you are only allowed to update',
        });
      } else {
        console.log(
          '------------Passed by allHospitalDetailValidator----------'
        );
        const allHospitalDetail = {
          hospitalCode: req.body.data.hospitalCode,
          hospitalName: req.body.data.hospitalName,
          hospitalAddress: req.body.data.hospitalAddress,
          noOfOxyCyl: req.body.data.noOfOxyCyl,
          noOfVacBed: req.body.data.noOfVacBed,
          noOfSingleVaccinatedPatient:
            req.body.data.noOfSingleVaccinatedPatient,
          noOfDoubleVaccinatedPatient:
            req.body.data.noOfDoubleVaccinatedPatient,
          noOfTripleVaccinatedPatient:
            req.body.data.noOfTripleVaccinatedPatient,
          noOfTotalCovidPatient: req.body.data.noOfTotalVaccinatedPatient,
          hospitalPhNo: req.body.data.hospitalPhNo,
        };
        const allHospitalDetailToBeSaved = new hospitalDetailTemplate(
          allHospitalDetail
        );
        allHospitalDetailToBeSaved
          .save()
          .then((data) => {
            if (data) {
              res.status(200).json({
                message: 'successfully saved allhospitaldetail',
              });
            } else {
              res.status(200).json({
                message: 'all hospitaldetail cannot be saved',
              });
            }
          })
          .catch((error) => {
            res.status(200).json({
              message: 'error in db while saving',
            });
          });
      }
    })
    .then((error) => {
      console.log(error);
    });
});

// !===================================HOSPITAL RESOURCE FILTER BY DISTRICT
router.post('/hospitalresourcedetail/district', (req, res) => {
  hospitalDetailTemplate
    .find({
      hospitalAddress: req.body.data.district,
    })
    .then((data) => {
      if (data[0]) {
        res.status(200).json({
          message: data,
        });
      } else {
        res.status(200).json({
          message: [],
        });
      }
    })
    .catch((error) => {
      console.log('error occured while finding data');
    });
});

module.exports = router;
