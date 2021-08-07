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
    .findOne({ dhodistrict: req.body.dhodistrict })
    .then((exist) => {
      if (exist) {
        console.log(`------------------DATA FOUND ALREAY EIST${exist}`);

        // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

        dhoDataTemplate.findOneAndUpdate(
          { dhodistrict: req.body.dhodistrict },
          {
            todaySingleVacUsed: req.body.todaySingleVacUsed,
            todayDoubleVacUsed: req.body.todayDoubleVacUsed,
            totalSingleVacUsed: req.body.totalSingleVacUsed,
            totalDoubleVacUsed: req.body.totalDoubleVacUsed,
            todayTotalVacUsed: req.body.todayTotalVacUsed,
            totaVacUsedTillToday: req.body.totalVacUsedTillToday,
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
          dhodistrict: req.body.dhodistrict,
          todaySingleVacUsed: req.body.todaySingleVacUsed,
          todayDoubleVacUsed: req.body.todayDoubleVacUsed,
          totalSingleVacUsed: req.body.totalSingleVacUsed,
          totalDoubleVacUsed: req.body.totalDoubleVacUsed,
          todayTotalVacUsed: req.body.todayTotalVacUsed,
          totalVacUsedTillToday: req.body.totalVacUsedTillToday,
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

module.exports = router;
