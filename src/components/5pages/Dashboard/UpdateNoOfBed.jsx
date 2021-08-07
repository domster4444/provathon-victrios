//?kljlj
import React from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { toast } from 'react-toastify';
const UpdateNoOfBed = (props) => {
  let SubmitHandler = (e) => {
    e.preventDefault();
    let updateField = document.getElementById('updateField');
    let updateValue = updateField.value;

    axios
      .patch('http://localhost:5000/api/hospital/resource-update', {
        data: {
          hospitalCode: props.loggedInHospitalDetail.loggedInHospitalCode,
          updateDirection: 'vacBed',
          value: updateValue,
        },
      })
      .then((res) => {
        console.log('-res after sending update req to updateDoubleVac Route');
        console.log(res.data.message);
        toast(res.data.message);
      })
      .catch(function (err) {
        console.log('-err after sending update req to updateDoubleVac Route');
        console.log(err);
      });
  };
  return (
    <main className="update-resource">
      <div className="containerCenter">
        <div className="contentBlock">
          <Form onSubmit={SubmitHandler}>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Update Bed Cylinder Quantity</Form.Label>
              <Form.Control
                id="updateField"
                type="number"
                placeholder="Enter No of Bed Available In This Hospital"
              />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox"></Form.Group>
            <Button variant="primary" type="submit">
              Update
            </Button>
          </Form>
        </div>
      </div>
    </main>
  );
};

export default UpdateNoOfBed;
