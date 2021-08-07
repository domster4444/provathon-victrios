import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

import { useState } from 'react';

import axios from 'axios';
const Dho = (props) => {
  //?district of dho from props
  const dhoDistrict = props.loggedInHospitalDetail.loggedInHospitalDistrict;

  // ____STATE
  const [todaySingleVacUsed, setTodaySingleVacUsed] = useState(0);
  const [todayDoubleVacUsed, setTodayDoubleVacUsed] = useState(0);
  const [totalSingleVacUsed, setTotalSingleVacUsed] = useState(0);
  const [totalDoubleVacUsed, setTotalDoubleVacUsed] = useState(0);

  let formhandler = (e) => {
    e.preventDefault();
    alert(`form submitted
    
    
   today single vac used = ${todaySingleVacUsed}
 today double vac used =    ${todayDoubleVacUsed}
    total single vac used = ${totalSingleVacUsed}
total double vac used =     ${totalDoubleVacUsed}
    `);

    const todayTotalVacUsed = todaySingleVacUsed + todayDoubleVacUsed;
    const totalVacUsedTillToday = totalSingleVacUsed + totalDoubleVacUsed;

    axios
      .post('http://localhost:5000/api/dhoDataSave', {
        data: {
          dhodistrict: dhoDistrict,
          todaySingleVacUsed: todaySingleVacUsed,
          todayDoubleVacUsed: todayDoubleVacUsed,
          totalSingleVacUsed: totalSingleVacUsed,
          totalDoubleVacUsed: totalDoubleVacUsed,
          todayTotalVacUsed: todayTotalVacUsed,
          totaVacUsedTillToday: totalVacUsedTillToday,
        },
      })

      .then((response) => {
        console.log(response);
        toast('Data Recorded successfully');
      })
      .catch((error) => {
        console.log(error);
        toast.error('Please Try Again Later');
      });
  };

  const globalFieldHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    //! today single vac
    if (name === 'today-single-vac') {
      console.log(`today-single-vac ${value}`);

      setTodaySingleVacUsed(value);
      console.log(todaySingleVacUsed);
      //! today double vac
    } else if (name === 'today-double-vac') {
      console.log(`today-double-vac ${value}`);
      setTodayDoubleVacUsed(value);
      console.log(todayDoubleVacUsed);
      //! total single vac
    } else if (name === 'total-single-vac') {
      console.log(`total-single-vac ${value}`);
      setTotalSingleVacUsed(value);
      console.log(totalSingleVacUsed);
      //! total double vac
    } else if (name === 'total-double-vac') {
      console.log(`total-double-vac ${value}`);
      setTotalDoubleVacUsed(value);
      console.log(totalDoubleVacUsed);
    }
  };

  return (
    <div id="dho-portal">
      <div className="containerCenter">
        <div className="contentBlock">
          <Form
            onSubmit={formhandler}
            className="outerForm"
            id="patient-recovered-form"
          >
            <Form.Row>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label className="poppins_regular_400">
                  Today Single Vaccine Used
                </Form.Label>
                <Form.Control
                  className="poppins_regular_400"
                  id="patient-name"
                  required
                  type="text"
                  name="today-single-vac"
                  onChange={globalFieldHandler}
                  placeholder="Enter Patient Name"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label className="poppins_regular_400">
                  Today Double Vaccine Used
                </Form.Label>
                <Form.Control
                  className="poppins_regular_400"
                  id="patient-name"
                  required
                  type="text"
                  name="today-double-vac"
                  onChange={globalFieldHandler}
                  placeholder="Enter Patient Name"
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label className="poppins_regular_400">
                  Total Double Vaccine Used
                </Form.Label>
                <Form.Control
                  className="poppins_regular_400"
                  id="patient-name"
                  required
                  type="text"
                  name="total-double-vac"
                  onChange={globalFieldHandler}
                  placeholder="Enter Patient Name"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label className="poppins_regular_400">
                  Total Single Vaccine Used
                </Form.Label>
                <Form.Control
                  className="poppins_regular_400"
                  id="patient-name"
                  required
                  type="text"
                  name="total-single-vac"
                  onChange={globalFieldHandler}
                  placeholder="Enter Patient Name"
                />
              </Form.Group>
            </Form.Row>
            <Button
              id="recoveredSubmitBtn"
              className="poppins_regular_400"
              variant="primary"
              type="submit"
            >
              Record
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Dho;
