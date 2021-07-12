import React from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
const UpdateTotalCovidPatient = () => {
  return (
    <main className="update-resource">
      <div className="containerCenter">
        <div className="contentBlock">
          <Form>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Update No Of Total Covid Patient</Form.Label>
              <Form.Control
                type="number"
                placeholder="Update No Of Total Covid Patient Available"
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

export default UpdateTotalCovidPatient;
