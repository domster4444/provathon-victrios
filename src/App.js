import React from 'react';
import './scss/main.css';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
export default function App() {
  return (
    <div>
      <main id="Navigation">
        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              Click me!
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </main>
    </div>
  );
}
