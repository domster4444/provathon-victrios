const express = require('express');
const router = express.Router();
const hospitalDetailTemplate = require('../model/HospitalDetail');

//TODO: VALIDATOR districtHealthDataValidator
const districtHealthDataValidator = require('../middleware/districtHealthDataValidator');

router.post(
  '/hospitalresourcedetail',
  districtHealthDataValidator,
  (req, res) => {
    console.log(typeof req.body.data.hospitalCode);
    console.log(`${req.body.data.hospitalCode}`);
    //?general validation passsed
    hospitalDetailTemplate
      .findOne({ hospitalCode: req.body.data.hospitalCode })
      .then((exist) => {
        if (exist) {
          console.log(`------------------DATA FOUND ALREAY EIST${exist}`);
          //?find data if the hospital has already setup it's initial allHospitalDetail
          res.status(200).json({
            //?if found previous record , provide"not allowed to make document again again and again
            message:
              'allhospitaldetails is already setup , you are only allowed to update ',
          });
        } else {
          console.log(
            '--------Passed by districtHealthDataValidator -----------'
          );
          //? if doc not found proceed to final route

          //??NOTES:
          //! make a validator that first checks hospital code & firsttime submit result ,
          //*if  the hospital trying to access this api has already submitted to true then res 'not allowed try updating '

          //************************NOTES
          //?this api consumes the hospital name, api , details, bed available , oxygen available

          //*there are some details that are not required to type on every request so make user save it in db after login
          //*and later when they submit details from this fetch their common(non-dynamic) data form db and subimit those
          //* global fetched common data of hospital along with dynamic data like oxygen cylinder available,no of bed available

          /**
           * @param://todo:  hospital code  (to identify in whiole collection)
           * @param //todo:  hospital name   (just below hospital code )
           * @param //todo:  bed available
           * @param //todo:  oxygen cylender available
           */
          //************************NOTES

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
            noOfTotalCovidPatient: req.body.data.noOfTotalCovidPatient,
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
      .catch((error) => {
        console.log(error);
      });
  }
);

// !===========================HOSPITAL RESOURCE FILTER BY DISTRICT
router.post('/hospitalresourcedetail/district', (req, res) => {
  hospitalDetailTemplate
    .find({ hospitalAddress: req.body.data.district })
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
