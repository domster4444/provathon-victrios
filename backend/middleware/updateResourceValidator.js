//todo: minimum req.
//*->req.body.data.hospitalCode

const Validator = require('validator');
const isEmpty = require('is-empty');
function registerValidator(req, res, next) {
  let errors = {};

  console.log(`update resource validator triggered`);
  const hospitalCode = req.body.data.hospitalCode;

  //TODO:==================redeclaring variable for validation
  //ysing isEmpty
  let myhospitalcode = !isEmpty(hospitalCode) ? hospitalCode : '';

  //name check
  if (Validator.isEmpty(myhospitalcode)) {
    errors.message =
      'hospitalCode is not passed to the route updateResourceDetail';
  }

  if (errors.message) {
    res.send(errors);
  } else {
    next();
  }

  console.log(
    '.................updateResource Validator Used....................... '
  );
}
module.exports = registerValidator;
