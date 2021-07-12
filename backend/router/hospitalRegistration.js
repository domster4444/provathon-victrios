const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

//todo: ________________MIDDLEWARES
const registerValidator = require('../middleware/registerValidator');

// _________________REGISTRATION MODEL
const hospitalRegistrationTemplate = require('../model/Hospital');
console.log('hospital route triggered');

// ***********************REIGSTER POST ROUTE
router.post('/register/hospital', registerValidator, (req, res) => {
  // ?CHECK IF EMAIL ALREADY EXIST IN DB OR NOT
  hospitalRegistrationTemplate
    .findOne({
      email: req.body.data.email,
    })
    .then((data) => {
      if (data) {
        return res.status(200).json({
          message: 'account already created using that email',
        });
      } else {
        console.log('/register/hospital route triggered');

        //todo: start __________________CREATING UNIQUE CODE FOR HOSPITALs AND CHECKING WHETHER THOSE CODE IS AVAILABLE OR NOT ________________

        function codeAlreadyExist() {
          // _________________CHECK WHETHER REGISTERED  EMAIL ALREADY EXIST IN DB OR NOT

          // _______________________HOSPITAL CODE GENERATION
          let random = (min, max) =>
            Math.floor(Math.random() * (max - min)) + min;
          let code = random(1, 999999);
          // _______________________HOSPITAL CODE to string
          let hospitalCode = code.toString();

          hospitalRegistrationTemplate
            .findOne({ code: hospitalCode })
            .then((data) => {
              if (data) {
                // Already there's a doc with that code
                codeAlreadyExist();
              } else {
                //todo: end __________________CREATING UNIQUE CODE FOR HOSPITALs AND CHECKING WHETHER THOSE CODE IS AVAILABLE OR NOT ________________

                //! aboveRandomNumberThatGoesThroughVerificationWhichDontExistInDbInCodeFieldOfDocAfterCheckingAndVerificationItIsUsedHereToRegisterUser

                const hospitalData = {
                  code: hospitalCode,
                  name: req.body.data.name,
                  email: req.body.data.email,
                  password: req.body.data.password1,
                  licence: req.body.data.licence,
                  district: req.body.data.district,
                };

                bcrypt.genSalt(10, (err, salt) => {
                  bcrypt.hash(hospitalData.password, salt, (err, hash) => {
                    if (err) {
                      res.status(200).json({
                        message: 'something went wrong while hashing password',
                      });
                    } else {
                      hospitalData.password = hash;
                      console.log(hash);

                      // ______________________SAVING REGISTERED USER DATA TO DB start
                      const registeredUserToBeSaved =
                        new hospitalRegistrationTemplate(hospitalData);
                      registeredUserToBeSaved
                        .save()
                        .then((data) => {
                          res.status(200).json({
                            message: 'registrationSuccessful',
                            data: data,
                          });
                        })
                        .catch((error) => {
                          res.json({
                            message:
                              'err occured while registering hospital  to db (DB Err)',
                          });
                        });
                      // ______________________SAVING REGISTERED USER DATA TO DB end
                    }
                  });
                });
              }
            });
        }
        codeAlreadyExist();
      }
    });
});

module.exports = router;
