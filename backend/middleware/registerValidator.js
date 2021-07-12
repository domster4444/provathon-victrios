const Validator = require('validator');
const isEmpty = require('is-empty');
function registerValidator(req, res, next) {
  let errors = {};

  console.log(`register validator triggered`);
  const name = req.body.data.name;
  const email = req.body.data.email;
  const district = req.body.data.district;
  const password1 = req.body.data.password1;
  const password2 = req.body.data.password2;
  const licence = req.body.data.licence;
  //TODO:==================redeclaring variable for validation
  //ysing isEmpty
  let mydistrict = !isEmpty(district) ? district : '';
  let myname = !isEmpty(name) ? name : '';
  let myemail = !isEmpty(email) ? email : '';
  let mylicence = !isEmpty(licence) ? licence : '';
  let mypassword1 = !isEmpty(password1) ? password1 : '';
  let mypassword2 = !isEmpty(password2) ? password2 : '';

  //name check
  if (Validator.isEmpty(mydistrict)) {
    errors.message = 'district  field is required';
  }
  //name check
  if (Validator.isEmpty(myname)) {
    errors.message = 'hospital name field is required';
  }

  // Email checks
  if (Validator.isEmpty(myemail)) {
    errors.message = 'Email field is required';
  } else if (!Validator.isEmail(myemail)) {
    errors.message = 'Email is invalid';
  }

  //licence check
  if (Validator.isEmpty(mylicence)) {
    errors.message = 'licence key field is required';
  }

  // Password checks
  if (Validator.isEmpty(mypassword1)) {
    errors.message = 'Password field is required';
  }
  if (Validator.isEmpty(mypassword2)) {
    errors.message = 'Confirm password field is required';
  }
  if (!Validator.isLength(mypassword1, { min: 6, max: 30 })) {
    errors.message = 'Password must be at least 6 characters';
  }
  if (!Validator.equals(mypassword1, mypassword2)) {
    errors.message = 'Passwords must match';
  }

  const licenceList = [
    '3986-2963-7657-6498',
    '3425-4772-9725-0095',
    '7155-7509-4664-1500',
    '3731-0797-0722-0304',
    '4213-6955-4693-2819',
    '4666-9974-7829-3229',
    '1884-9082-3827-2345',
    '6811-9528-9836-9669',
    '8183-9272-2442-4142',
    '4801-7508-9521-5375',
    '7320-4907-2656-1071',
    '6920-4460-5173-0399',
    '5235-2113-6446-0537',
    '7154-8864-9643-7998',
    '1217-9801-4012-3432',
    '1810-7456-9251-4891',
    '0630-6947-1681-6573',
    '9126-0663-6975-5119',
    '0909-3561-4479-0647',
    '5169-7817-4813-2974',
  ];
  let isMatchLicence = licenceList.includes(licence.toString());
  if (isMatchLicence) {
    //?if licence key matched then check if other error occured or not
    if (errors.message) {
      res.send(errors);
    } else {
      next();
    }
  } else {
    res.status(200).json({
      message: "licence key didn't matched",
    });
  }

  console.log(
    '.................Register Validator Used....................... '
  );
}
module.exports = registerValidator;
