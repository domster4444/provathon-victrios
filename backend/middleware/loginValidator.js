const Validator = require('validator');
const isEmpty = require('is-empty');
function loginValidator(req, res, next) {
  console.log('___Login Validator triggered______');

  let loginerrors = {};

  const code = req.body.data.code;
  const password = req.body.data.password1;

  //todo:---------------redeclaring variable for checking
  let mycode = !isEmpty(code) ? code : '';
  let mypassword = !isEmpty(password) ? password : '';

  if (Validator.isEmpty(mycode)) {
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
    console.log('_login validation completed_');
  }
}
module.exports = loginValidator;
