const express = require('express');
const router = express.Router();
// importing bcrypt module for comparing password in db
const bcrypt = require('bcrypt');
const hospitalRegistrationTemplate = require('../model/Hospital');
const loginValidator = require('../middleware/loginValidator');
router.post('/login/hospital', loginValidator, (req, res) => {
  // user data
  const userCode = req.body.data.code;
  const userPassword = req.body.data.password1;
  //??check if code exist in db , if code exist then run below code to cncrypt password matching
  hospitalRegistrationTemplate
    .findOne({ code: userCode })
    .then((data) => {
      if (data) {
        //   info of hospital
        console.log(
          `respective hogging in thospital details in db after verification that it exists in login ${data}`
        );

        console.log('user available in db');
        const passCryptStringDB = data.password;
        console.log(passCryptStringDB);

        function compareWithBcrypt(encrypted) {
          bcrypt.compare(encrypted, passCryptStringDB, (err, testResult) => {
            console.log('compared result', testResult);
            if (testResult) {
              res.status(200).json({
                message: 'loginsuccess',
                hospitalCode: data.code,
                hospitalName: data.name,
                hospitalEmail: data.email,
                hospitalDistrict: data.district,
              });
            } else {
              res.status(500).json({
                message: 'either username/password not matched',
              });
            }
          });
        }
        compareWithBcrypt(userPassword);
      } else {
        console.log('user not avaialble in db');
        res.status(200).json({
          message: 'account not available',
        });
      }
    })
    .catch((error) => {
      console.log('Error While Logging In Try Again');
      res.status(200).json({
        message: 'Error While Loggin In Try Again',
      });
    });
});
module.exports = router;
