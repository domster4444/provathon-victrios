const mongoose = require('mongoose');
const hospitalRegistration = require('./router/hospitalRegistration');
const hospitalLogin = require('./router/hospitalLogin');
const hospitalDetail = require('./router/hospitalDetail');
const isDetailAlreadySetup = require('./router/isDetailAlreadySetup');
const express = require('express');
const app = express();
//------------------------------------ALLOW BODY PARSER
app.use(express.json());
app.use(express.urlencoded());
//----------------------------------ALLOW CROSS ORIGIN access
const cors = require('cors');
app.use(cors());
const dotenv = require('dotenv');
dotenv.config();
//* +++++++++++++++++++++++++CONNECT TO DB
mongoose.connect(process.env.MONGO_URL, () => {
  console.log('________DB CONNECTED SUCCESSFULLY___________');
});

// ??----------ENTRY ROUTE
app.get('/api', (req, res) => {
  res.status(200).json({
    message: 'Server End Point',
  });
});

//? =======================================ROUTER
app.use('/api', hospitalRegistration);
app.use('/api', hospitalLogin);
//---------->initial hospital detail
app.use('/api', hospitalDetail);
//---------->check if hospital already setup detail or not
app.use('/api', isDetailAlreadySetup);
// -------------------->save details of patient after patient is recovered
///? localhost:5000/api/patientrecovered
app.use('/api', require('./router/patientRecovered'));
///? localhost:5000/api/fetchhospitalno
app.use('/api', require('./router/fetchHospitalNoFromAlreadySetup'));
app.use('/api', require('./router/fetchHospitalNoFromAlreadySetup'));
app.use('/api', require('./router/patientRecoveredByDistrict'));
app.listen(process.env.PORT || 5000, (req, res) => {
  console.log(
    '*************************** SERVER STARTED AT ********************'
  );
});
