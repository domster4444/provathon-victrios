import React from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// ________________REACT BTSTRP
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// ============PAGE
import DashboardBody from './Dashboard/DashboardBody';
// --dashboard bdy

import RecoveredPatientBody from './Dashboard/RecoveredPatientBody';
import UpdateOxyCylBody from './Dashboard/UpdateNoOfCylinder';
import UpdateBedAvailableBody from './Dashboard/UpdateNoOfBed';
import UpdateSingleVacPatientBody from './Dashboard/UpdateSingleVacPatient';
import UpdateDoubleVacPatientBody from './Dashboard/UpdateDoubleVacPatient';
import UpdateTripleCovidPatientBody from './Dashboard/UpdateTripleVacPatient';
import UpdateTotalCovidBody from './Dashboard/UpdateTotalCovidPatient';

// ==========IMG
import hospitalIco from '../../img/generalImage/hospital.png';
import singleVaccinatedIco from '../../img/DashboardSideIco/singleVaccinatedIco.png';
import doubleVaccinatedIco from '../../img/DashboardSideIco/doubleVaccinatedIco.png';
import tripleVaccinatedIco from '../../img/DashboardSideIco/tripleVaccinatedIco.png';

const DashboardPage = (props) => {
  // __________DATA AVAILABLE
  console.log('📈----');
  console.log(props.loggedInHospitalDetail);
  console.log('📈----');

  //? __________ISHOSPITAL DETAIL ALREADY SETUP-START
  // *if already setup then setshow to false
  const [show, setShow] = useState(false);

  // *_______function to close and hide
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // ?__________ISHOSPITAL DETAIL ALREADY SETUP-END

  useEffect(() => {
    let btn = document.querySelector('#btn');
    let sidebar = document.querySelector('.sidebar');

    btn.onclick = function () {
      sidebar.classList.toggle('active');
      if (btn.classList.contains('bx-menu')) {
        btn.classList.replace('bx-menu', 'bx-menu-alt-right');
      } else {
        btn.classList.replace('bx-menu-alt-right', 'bx-menu');
      }
    };

    // *__________________________________________________________________________________-

    axios
      .post('http://localhost:5000/api/isAlreadySetup', {
        data: {
          code: props.loggedInHospitalDetail.loggedInHospitalCode,
        },
      })
      .then((res) => {
        console.log(`😀😂👌❤️😍---->  `);
        console.log(res.data.message);
        if (res.data.message === 'allowedToShowModel') {
          props.setIsInitialHospitalAlreadySet(false);
        } else {
          props.setIsInitialHospitalAlreadySet(true);
        }

        // ????initialHospitalDetailsetup or not?? the server sends res whether already setup or not
        //??????? ___________already setup or not with this hospital code

        if (props.isInitialHospitalAlreadySet === false) {
          // -----------------------if initial details are not set=> show model ------------------------------
          setShow(true);
        } else {
          // -----------------------if initial details are not set=>hide model ------------------------------
          setShow(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    // *__________________________________________________________________________________-
  }, []);

  //check show state on every rerender
  useEffect(() => {
    // -------sidebar PROBLEM--------------------------------------------------------------------------------------------
    //? ________ sidebar goes beside blacktransparentdiv only with -ve zindex
    // GBL VAR
    let dashboard_sidebar = document.querySelector('.sidebar');
    if (show === true) {
      dashboard_sidebar.style.zIndex = '-1';
    }
    //? ________ if show is false then set z index of sidebar to 200
    if (show === false) {
      dashboard_sidebar.style.zIndex = '200';
    }
  });
  //TODO: ====================================MODEL FORM
  let modalFormHandler = (e) => {
    e.preventDefault();

    let noOfOxyCylField = document.getElementById('oxyCylInputField');
    let noOfVacBedField = document.getElementById('vacBedInputField');
    let noOfSingleVaccinatedPatientField = document.getElementById(
      'singleVaccinatedInputField'
    );
    let noOfDoubleVaccinatedPatientField = document.getElementById(
      'doubleVaccinatedInputField'
    );
    let noOfTripleVaccinatedPatientField = document.getElementById(
      'tripleVaccinatedInputField'
    );
    let noOfTotalCovidPatientField = document.getElementById(
      'totalCovidInputField'
    );
    let hospitalPhNo = document.getElementById('hospitalPhNo');

    // ?value of respective form fields (dynamic data depending upon hospitals)
    const noOfOxyCylVal = noOfOxyCylField.value;
    const noOfVacBedVal = noOfVacBedField.value;
    const noOfSingleVaccinatedPatientVal =
      noOfSingleVaccinatedPatientField.value;
    const noOfDoubleVaccinatedPatientVal =
      noOfDoubleVaccinatedPatientField.value;
    const noOfTripleVaccinatedPatientVal =
      noOfTripleVaccinatedPatientField.value;
    const noOfTotalCovidPatientVal = noOfTotalCovidPatientField.value;
    const hospitalPhNoVal = hospitalPhNo.value;
    console.log('FORM SUBMITTED MODEL FORM SUBMITTED');
    //?server accepts the following datas for initial data setup
    // hospitalCode;
    // hospitalName;
    // hospitalAddress;
    // noOfOxyCyl;
    // noOfVacBed;
    // noOfSingleVaccinatedPatient;
    // noOfDoubleVaccinatedPatient;
    // noOfTripleVaccinatedPatient;
    // noOfTotalCovidPatient;

    let loggedInHospitalCodeVal =
      props.loggedInHospitalDetail.loggedInHospitalCode;
    let loggedInHospitalNameVal =
      props.loggedInHospitalDetail.loggedInHospitalName;
    let loggedInHospitalDistrictVal =
      props.loggedInHospitalDetail.loggedInHospitalDistrict;
    axios
      .post('http://localhost:5000/api/hospitalresourcedetail', {
        data: {
          hospitalCode: loggedInHospitalCodeVal,
          hospitalName: loggedInHospitalNameVal,
          hospitalAddress: loggedInHospitalDistrictVal,
          noOfOxyCyl: noOfOxyCylVal,
          noOfVacBed: noOfVacBedVal,
          noOfSingleVaccinatedPatient: noOfSingleVaccinatedPatientVal,
          noOfDoubleVaccinatedPatient: noOfDoubleVaccinatedPatientVal,
          noOfTripleVaccinatedPatient: noOfTripleVaccinatedPatientVal,
          noOfTotalCovidPatient: noOfTotalCovidPatientVal,
          hospitalPhNo: hospitalPhNoVal,
        },
      })
      .then((res) => {
        props.setLoggedInHotpitalPhNo(hospitalPhNoVal);
        if (res.data.message === 'successfully saved allhospitaldetail') {
          console.log(res.data);
          console.log('----------Initial DATA  SAVED');
          toast.success('----------Initial DATA  SAVED');
        } else {
          console.log(res.data);
          console.log('----------Initial DATA CANT BE SAVED');
          toast.error('----------Initial DATA CANT BE SAVED');
        }
        handleClose();

        // ---close aft inital  modal form submit
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Router>
        <div>
          <form>
            <Modal
              id="setInitialDetails-Model"
              show={show}
              onHide={handleClose}
            >
              <Modal.Header closeButton>
                <Modal.Title id="initail-setup-detail-title">
                  SetUp Initial Hospital Details
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <section className="setup-detail-subTitle">
                  <u>SetUp Initial Hosptial Detaills </u>
                  <br />
                  <br />
                  <Form.Label className="poppins_medium_500 label-title">
                    No of oxygen cylinder available
                  </Form.Label>
                  <Form.Control
                    className="model-input-field"
                    id="oxyCylInputField"
                    type="number"
                    placeholder="Enter no of oxygen cylinder available"
                  />
                  <Form.Label className="poppins_medium_500 label-title">
                    No of Bed available
                  </Form.Label>
                  <Form.Control
                    className="model-input-field"
                    id="vacBedInputField"
                    type="number"
                    placeholder="Enter no of bed available"
                  />
                  <Form.Label className="poppins_medium_500 label-title">
                    No of single vaccinated people
                  </Form.Label>
                  <Form.Control
                    className="model-input-field"
                    id="singleVaccinatedInputField"
                    type="number"
                    placeholder="Enter no of single vaccinated patient admitted"
                  />
                  <Form.Label className="poppins_medium_500 label-title">
                    No of double vaccinated people
                  </Form.Label>
                  <Form.Control
                    className="model-input-field"
                    id="doubleVaccinatedInputField"
                    type="number"
                    placeholder="Enter no of double vaccinated patient admitted"
                  />
                  <Form.Label className="poppins_medium_500 label-title">
                    No of triple vaccinated people
                  </Form.Label>
                  <Form.Control
                    className="model-input-field"
                    id="tripleVaccinatedInputField"
                    type="number"
                    placeholder="Enter no of triple vaccinated patient admitted"
                  />
                  <Form.Label className="poppins_medium_500 label-title">
                    Total Covid Patient
                  </Form.Label>
                  <Form.Control
                    className="model-input-field"
                    id="totalCovidInputField"
                    type="number"
                    placeholder="Enter total covid patient in your hospital"
                  />
                  <Form.Label className="poppins_medium_500 label-title">
                    Hospital Phone No
                  </Form.Label>
                  <Form.Control
                    className="model-input-field"
                    id="hospitalPhNo"
                    type="number"
                    placeholder="Enter hospital phone no"
                  />
                </section>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  className="poppins_regular_400 btn"
                  variant="secondary"
                  onClick={handleClose}
                >
                  Close
                </Button>
                <Button
                  className="poppins_regular_400"
                  variant="primary"
                  onClick={modalFormHandler}
                >
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </form>

          <div className="sidebar">
            <div className="logo_content">
              <div className="logo">Our logo</div>
              <i className="bx bx-menu" id="btn" />
            </div>
            <ul className="nav_list">
              <li>
                <Link to="/dashboardpage">
                  <i className="bx bx-grid-alt" />
                  <span className="links_name">Dashboard</span>
                </Link>
                <span className="tooltip">Dashboard</span>
              </li>
              <li>
                <Link to="/recoveredpatient">
                  <i className="bx bx-user" />
                  <span className="links_name">Recovered Patient</span>
                </Link>
                <span className="tooltip">Recovered Patient</span>
              </li>
              <li>
                <Link to="/update-oxy-available">
                  <i class="bx bx-coin-stack"></i>
                  <span className="links_name">Update Oxy Cylinder</span>
                </Link>
                <span className="tooltip">Update Oxy Cylinder</span>
              </li>
              <li>
                <Link to="/update-bed-available">
                  <i class="bx bx-bed"></i>
                  <span className="links_name">Update Bed Availability</span>
                </Link>
                <span className="tooltip">Update Bed Availability</span>
              </li>
              <li>
                <Link to="/update-net-single-vac-patient">
                  <img
                    className="vaccineIco"
                    src={singleVaccinatedIco}
                    alt=""
                  />
                  <span className="links_name">Upd. Single Vaccinated</span>
                </Link>
                <span className="tooltip">Upd. Single Vaccinated Patient</span>
              </li>
              <li>
                <Link to="/update-net-double-vac-patient">
                  <img
                    className="vaccineIco"
                    src={doubleVaccinatedIco}
                    alt=""
                  />
                  <span className="links_name">Upd. Double Vaccinated</span>
                </Link>
                <span className="tooltip">Upd. Double Vaccinated</span>
              </li>
              <li>
                <Link to="/update-net-triple-vac-patient">
                  <img
                    className="vaccineIco"
                    src={tripleVaccinatedIco}
                    alt=""
                  />
                  <span className="links_name">Upd. Triple Vaccinated</span>
                </Link>
                <span className="tooltip">Upd. Triple Vaccinated</span>
              </li>
              <li>
                <Link to="/update-total-covid-no">
                  <i class="bx bxs-virus"></i>
                  <span className="links_name">Upd. Total Covid</span>
                </Link>
                <span className="tooltip">Upd. Total Covid</span>
              </li>
            </ul>
            <div className="profile_content">
              <div className="profile">
                <i className="bx bx-log-out" id="log_out" />
              </div>
            </div>
          </div>
          <div className="home_content">
            {/*//? __________start______BODY CONTENT  */}

            {/*//? ________________________________________NAVIGATION  Dashboard Navigation */}
            <header id="dashboard-bodycontent-header">
              <nav id="dashboard-nav">
                <ul>
                  <li>
                    <img src={hospitalIco} alt="" />
                    <span>
                      {props.loggedInHospitalDetail.loggedInHospitalName}
                    </span>
                  </li>
                </ul>
              </nav>
            </header>

            {/* __________DAHBOARD-BODY  */}

            <Route
              exact
              path="/dashboardpage"
              component={() => (
                <DashboardBody
                  loggedInHospitalDetail={props.loggedInHospitalDetail}
                />
              )}
            />
            {/*//? __________end______BODY CONTENT  */}

            <Route
              exact
              path="/recoveredpatient"
              component={() => (
                <RecoveredPatientBody
                  setLoggedInHotpitalPhNo={props.setLoggedInHotpitalPhNo}
                  loggedInHospitalDetail={props.loggedInHospitalDetail}
                />
              )}
            />
            {/* //!--update  */}
            <Route
              exact
              path="/update-oxy-available"
              component={() => (
                <UpdateOxyCylBody
                  setLoggedInHotpitalPhNo={props.setLoggedInHotpitalPhNo}
                  loggedInHospitalDetail={props.loggedInHospitalDetail}
                />
              )}
            />
            <Route
              exact
              path="/update-bed-available"
              component={() => (
                <UpdateBedAvailableBody
                  setLoggedInHotpitalPhNo={props.setLoggedInHotpitalPhNo}
                  loggedInHospitalDetail={props.loggedInHospitalDetail}
                />
              )}
            />
            <Route
              exact
              path="/update-net-single-vac-patient"
              component={() => (
                <UpdateSingleVacPatientBody
                  setLoggedInHotpitalPhNo={props.setLoggedInHotpitalPhNo}
                  loggedInHospitalDetail={props.loggedInHospitalDetail}
                />
              )}
            />
            <Route
              exact
              path="/update-net-double-vac-patient"
              component={() => (
                <UpdateDoubleVacPatientBody
                  setLoggedInHotpitalPhNo={props.setLoggedInHotpitalPhNo}
                  loggedInHospitalDetail={props.loggedInHospitalDetail}
                />
              )}
            />
            <Route
              exact
              path="/update-net-triple-vac-patient"
              component={() => (
                <UpdateTripleCovidPatientBody
                  setLoggedInHotpitalPhNo={props.setLoggedInHotpitalPhNo}
                  loggedInHospitalDetail={props.loggedInHospitalDetail}
                />
              )}
            />
            <Route
              exact
              path="/update-total-covid-no"
              component={() => (
                <UpdateTotalCovidBody
                  setLoggedInHotpitalPhNo={props.setLoggedInHotpitalPhNo}
                  loggedInHospitalDetail={props.loggedInHospitalDetail}
                />
              )}
            />
          </div>
        </div>
      </Router>
    </>
  );
};

export default DashboardPage;
