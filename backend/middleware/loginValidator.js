const Validator = require('validator');
const isEmpty = require('is-empty');
function loginValidator(req, res, next) {
  console.log('___Login Validator Triggered___');
  let loginerrors = {};

  /**
   * @param function //?API REQUEST BODY DATA ->(code,password)
   *
   */

  const code = req.body.data.code;
  const password = req.body.data.password1;

  // redecalre for validation
  let mycode = !isEmpty(code) ? code : '';
  let mypassword = !isEmpty(password) ? password : '';

  if (Validator.isEmpty(password)) {
    loginerrors.message = 'code field is required';
  }
  if (Validator.isEmpty(mypassword)) {
    loginerrors.message = 'password field is required';
  }
  if (loginerrors.message) {
    res.status(200).json({
      message: loginerrors.message,
    });
  } else {
    next();
    console.log('____login validation middleware passed___');
  }
}

module.exports = loginValidator;
