// dhodistrict: dhoDistrict,
// todaySingleVacUsed: todaySingleVacUsed,
// todayDoubleVacUsed: todayDoubleVacUsed,
// totalSingleVacUsed: totalSingleVacUsed,
// totalDoubleVacUsed: totalDoubleVacUsed,
// todayTotalVacUsed: todayTotalVacUsed,
// totaVacUsedTillToday: totalVacUsedTillToday,

const express = require('express');
const router = express.Router();
const dhoDataTemplate = require('../model/DhoData');

//TODO: VALIDATOR districtHealthDataValidator
const districtHealthDataValidator = require('../middleware/districtHealthDataValidator');

router.post('/dhoDataSave', (req, res) => {
  //?general validation passsed
  dhoDataTemplate
    .findOne({ dhodistrict: req.body.data.dhodistrict })
    .then((exist) => {
      if (exist) {
        console.log(`------------------DATA FOUND ALREAY EIST${exist}`);

        // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

        dhoDataTemplate.findOneAndUpdate(
          { dhodistrict: req.body.data.dhodistrict },
          {
            todaySingleVacUsed: req.body.data.todaySingleVacUsed,
            todayDoubleVacUsed: req.body.data.todayDoubleVacUsed,
            totalSingleVacUsed: req.body.data.totalSingleVacUsed,
            totalDoubleVacUsed: req.body.data.totalDoubleVacUsed,
            todayTotalVacUsed: req.body.data.todayTotalVacUsed,
            totaVacUsedTillToday: req.body.data.totalVacUsedTillToday,
          },
          (err, data) => {
            // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            if (err) {
              console.log(err);
              res.status(200).json({
                message: 'err occured while updateing oxy cyl in db',
              });
            } else {
              console.log(data);
              res.status(200).json({
                message: 'updated successfully',
              });
            }
            // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
          }
        );
        // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
      } else {
        console.log(
          '--------data dont exist already So creating document save() -----------'
        );

        // ))))))))))))))))))))))))))))))))))))))SAVE ()

        const dhoDataToSave = new dhoDataTemplate({
          dhodistrict: req.body.data.dhodistrict,
          todaySingleVacUsed: req.body.data.todaySingleVacUsed,
          todayDoubleVacUsed: req.body.data.todayDoubleVacUsed,
          totalSingleVacUsed: req.body.data.totalSingleVacUsed,
          totalDoubleVacUsed: req.body.data.totalDoubleVacUsed,
          todayTotalVacUsed: req.body.data.todayTotalVacUsed,
          totalVacUsedTillToday: req.body.data.totalVacUsedTillToday,
        });

        dhoDataToSave
          .save()
          .then((data) => {
            res.json(data);
          })
          .catch((error) => {
            res.json(error);
          });

        // ))))))))))))))))))))))))))))))))))))))SAVE ()
      }
    })
    .catch((error) => {
      console.log(error);
    });
});

// ___FOR GETTNG DHO DATA

// !===========================HOSPITAL RESOURCE FILTER BY DISTRICT
router.post('/dhoDataGet', (req, res) => {
  dhoDataTemplate
    .find({ dhodistrict: req.body.data.dhodistrict })
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
