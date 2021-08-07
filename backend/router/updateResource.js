//route for updating a resource

const express = require('express');
const router = express.Router();
//importing bcrypt module for comparing password in db

const hospitalDetailTemplate = require('../model/HospitalDetail');
const updateResourceValidator = require('../middleware/updateResourceValidator');
router.patch(
  '/hospital/resource-update',
  updateResourceValidator,
  (req, res) => {
    //?hospital code provided so that we can check if the hospital has setup initial data or not and then we can update the data
    let hospitalCode = req.body.data.hospitalCode;
    let updateDirection = req.body.data.updateDirection;
    let value = req.body.data.value;

    //?check if hospital has already setup initial data or not
    hospitalDetailTemplate
      .findOne({ hospitalCode: hospitalCode })
      .then((data) => {
        if (data) {
          //?hospital has setup the initial data ✅

          console.log('hospital has setup the initial data');
          // _____________________________________________________________________
          //todo: update oxygen cyl->
          if (updateDirection === 'oxygenCyl') {
            hospitalDetailTemplate.findOneAndUpdate(
              { hospitalCode: hospitalCode },
              {
                noOfOxyCyl: value,
                date: Date.now(),
              },
              (err, data) => {
                if (err) {
                  console.log(err);
                  res.status(200).json({
                    message: 'err occured while updating oxy cyl in db',
                  });
                } else {
                  console.log(data);
                  res.status(200).json({
                    message: 'updated oxy cyl in db success',
                  });
                }
              }
            );
            //todo: update vac bed->
          } else if (updateDirection === 'vacBed') {
            hospitalDetailTemplate.findOneAndUpdate(
              { hospitalCode: hospitalCode },
              {
                noOfVacBed: value,
                date: Date.now(),
              },
              (err, data) => {
                if (err) {
                  console.log(err);
                  res.status(200).json({
                    message: 'err occured while updating oxy cyl in db',
                  });
                } else {
                  console.log(data);
                  res.status(200).json({
                    message: 'updated oxy cyl in db success',
                  });
                }
              }
            );
            //todo: update single vac->
          } else if (updateDirection === 'singleVac') {
            hospitalDetailTemplate.findOneAndUpdate(
              { hospitalCode: hospitalCode },
              {
                noOfSingleVaccinatedPatient: value,
                date: Date.now(),
              },
              (err, data) => {
                if (err) {
                  console.log(err);
                  res.status(200).json({
                    message: 'err occured while updating oxy cyl in db',
                  });
                } else {
                  console.log(data);
                  res.status(200).json({
                    message: 'updated oxy cyl in db success',
                  });
                }
              }
            );
            //todo: update double vac->
          } else if (updateDirection === 'doubleVac') {
            hospitalDetailTemplate.findOneAndUpdate(
              { hospitalCode: hospitalCode },
              {
                noOfDoubleVaccinatedPatient: value,
                date: Date.now(),
              },
              (err, data) => {
                if (err) {
                  console.log(err);
                  res.status(200).json({
                    message: 'err occured while updating oxy cyl in db',
                  });
                } else {
                  console.log(data);
                  res.status(200).json({
                    message: 'updated oxy cyl in db success',
                  });
                }
              }
            );
            //todo: update zero vac->
          } else if (updateDirection === 'zeroVac') {
            hospitalDetailTemplate.findOneAndUpdate(
              { hospitalCode: hospitalCode },
              {
                noOfTripleVaccinatedPatient: value,
                date: Date.now(),
              },
              (err, data) => {
                if (err) {
                  console.log(err);
                  res.status(200).json({
                    message: 'err occured while updating oxy cyl in db',
                  });
                } else {
                  console.log(data);
                  res.status(200).json({
                    message: 'updated oxy cyl in db success',
                  });
                }
              }
            );

            //todo: update total covid->
          } else if (updateDirection === 'totalCovid') {
            hospitalDetailTemplate.findOneAndUpdate(
              { hospitalCode: hospitalCode },
              {
                noOfTotalCovidPatient: value,
                date: Date.now(),
              },
              (err, data) => {
                if (err) {
                  console.log(err);
                  res.status(200).json({
                    message: 'err occured while updating oxy cyl in db',
                  });
                } else {
                  console.log(data);
                  res.status(200).json({
                    message: 'updated oxy cyl in db success',
                  });
                }
              }
            );
          } else {
            res.status(200).json({
              message: 'update command not matched',
            });
          }

          // _____________________________________________________________________
        } else {
          //?hospital has not setup the intial data ❌
          console.log('hospital has not setup the initial data');
          res.status(200).json({
            message: 'hospital has not seetup the initial data',
          });
        }
      })
      .catch((error) => {
        console.log(
          'Error While finding isInitialSetupAlreadyDone for this hospital '
        );
        res.status(200).json({
          message:
            'Error While finding isInitialSetupAlreadyDone for this hospital',
        });
      });
  }
);
module.exports = router;
