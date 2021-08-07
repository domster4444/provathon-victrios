import React from 'react';
import logo from '../../img/companyLogo.png';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/esm/Dropdown';
// ---------------react btstrp
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';

// ------------------react icons

import { FiAlertTriangle } from 'react-icons/fi';
export default function Header(props) {
  if (props.isLoggedInProps === true) {
    return <div></div>;
  } else {
    return (
      <>
        <Accordion
          className="poppins_regular_400"
          defaultActiveKey="0"
          id="covidFact"
        >
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              <FiAlertTriangle id="covidFactWarningIco" />
              Covid Fact
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <ul className="poppins_regular_400">
                  <li>Clean your hands often</li>
                  <li>Cough or sneeze in your bent elbow - not your hands!</li>
                  <li>Avoid touching your eyes, nose and mouth </li>
                  <li>
                    Limit social gatherings and time spent in crowded places
                  </li>
                  <li>Avoid close contact with someone who is sick</li>
                  <li>
                    Clean and disinfect frequently touched objects and surfaces
                  </li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>

        <header id="navBar">
          <nav>
            <a href="/">
              <div id="logoBlock">
                <img src={logo} alt="representation of logo" />
                <span id="site-title" className="poppins_bold_700">
                  COVID STATS NEPAL
                </span>
              </div>
            </a>
            <div id="menuBlock">
              <ul>
                <li className="cursor poppins_regular_400">
                  <Link to="/">Home</Link>
                </li>

                <Dropdown
                  id="headerDropdown"
                  className="cursor poppins_regular_400"
                >
                  <Dropdown.Toggle
                    className="poppins_regular_400"
                    variant="success"
                    id="dropdown-basic"
                  >
                    Services
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item>
                      <Link to="/hospitalservice">Hospital Services</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="/vaccineservice">Vaccine Service</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="/covidstatus">Covid Status</Link>
                    </Dropdown.Item>
                    {/* <Dropdown.Item>
                      <Link to="/districtstatspage">District Stats</Link>
                    </Dropdown.Item> */}
                  </Dropdown.Menu>
                </Dropdown>
                <li className="cursor poppins_regular_400">
                  <Link to="/ourteam">Our Team</Link>
                </li>

                <li className="cursor poppins_regular_400">
                  <Link to="/login">Login</Link>
                </li>
                <li className="cursor poppins_regular_400">
                  <Link to="/signup">Register</Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </>
    );
  }
}
