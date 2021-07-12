import React from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
const UpdateNoOfCylinder = () => {
  return (
    <main className="update-resource">
      <div className="containerCenter">
        <div className="contentBlock">
          <Form>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Update Oxygen Cylinder Quantity</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter No of Oxygen Available In This Hospital"
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

export default UpdateNoOfCylinder;
