const express = require('express');
const router = express.Router();
//importing bcrypt module for comparing password in db

const bcrypt = require('bcrypt');
const hospitalRegistrationTemplate = require('../model/Hospital');

const loginValidator = require('../middleware/loginValidator');
router.post('/login/hospital', loginValidator, (req, res) => {
  //? user data
  const userCode = req.body.data.code;
  const userPassword = req.body.data.password1;

  //todo:  ______CHECK IF CODE EXIST IN DB OR NOT IF EXIST THEN RUN BELOW CODE TO ENCRYPT PASS MATCHING

  hospitalRegistrationTemplate
    .findOne({ code: userCode })
    .then((data) => {
      if (data) {
        // ----------->
        // info of hospital
        console.log(
          `reqpective logging in hospital details in db after verification that it exists in login ${data}`
        );

        console.log('user available in appolo db');
        const passCryptStringDB = data.password;
        console.log(passCryptStringDB);

        //* --------start-----CHECKING CYPT PASS WITH DBCRYPT PASS
        function compareWithBcrypt(encrypted) {
          //?*********-->pass in db
          bcrypt.compare(encrypted, passCryptStringDB, (err, testResult) => {
            // res == true or res == false
            console.log('Compared result', testResult);
            //? -+++++++++++++++++if comparison test came true +++++++++++++++
            if (testResult) {
              //////////////////////JWT//////////////////////

              //?JWT AUTH

              ///////////////////////////////////////////

              //sending response on success

              res.status(200).json({
                message: 'loginSuccess',
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

            //? -+++++++++++++++++if comparison test came true +++++++++++++++
          });
        }
        //*****password that I send from client */
        compareWithBcrypt(userPassword);
        //* --------end-----CHECKING CYPT PASS WITH DBCRYPT PASS
      } else {
        console.log('user not available in appolo db');
        res.status(200).json({
          message: 'Account Not Available',
        });
      }
    })
    .catch((error) => {
      console.log('Error While LoggingIn Try Again ');
      res.status(200).json({
        message: 'Error While LoggingIn Try Again',
      });
    });
});
module.exports = router;
