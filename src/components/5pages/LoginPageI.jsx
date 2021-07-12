import React from 'react';
import { Redirect } from 'react-router';
import Form from 'react-bootstrap/Form';
import doctorBg from '../../img/generalImage/docBG.png';
import Button from 'react-bootstrap/Button';

import { useState } from 'react';
import { useHistory } from 'react-router';
// ____THIRD PARTY
import axios from 'axios';
import { toast } from 'react-toastify';

const LoginPageI = (props) => {
  const history = useHistory();
  let LoginCodeField = document.getElementById('login_code_field');
  let LoginPasswordField = document.getElementById('login_password_field');
  // _________________________________STATE
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');

  // ______________________________________GLOBAL HANDLER
  let globalLoginHandler = (e) => {
    if (e.target.name === 'login_code_field') {
      setCode(e.target.value);
      console.log(code);
    }
    if (e.target.name === 'login_password_field') {
      setPassword(e.target.value);
      console.log(password);
    }
  };

  // ------------------------------------SUBMIT HANDLER
  let loginHandler = (e) => {
    e.preventDefault();

    if (code.length === 0) {
      toast.warning('code field is required');
    } else if (password.length === 0) {
      toast.warning('passow field is required');
    } else if (code.length < 0) {
      toast.warning('passow field is required');
      // ?---Validation Completed
    } else {
      // ?--find if user is authorized or not
      axios.interceptors.request.use(
        (config) => {
          console.log(
            `${config.method} request send to ${config.url} at ${new Date()}  `
          );
          return config;
        },
        (error) => {
          return Promise.reject(error);
        }
      );

      axios
        .post('http://localhost:5000/api/login/hospital', {
          data: {
            code: code,
            password1: password,
          },
        })
        .then((res) => {
          //* res.status(200).json({
          //*   message: 'loginSuccess',
          //*   hospitalCode: data.code,
          //*   hospitalName: data.name,
          //*   hospitalEmail: data.email,
          //*   hospitalDistrict: data.district,
          //* });

          console.log(res.data.message);
          // ---------set loggedin hospital state after success login in appjs
          props.setLoggedInHospitalCode(res.data.hospitalCode);
          props.setLoggedInHospitalName(res.data.hospitalName);
          props.setLoggedInHospitalEmail(res.data.hospitalEmail);
          props.setLoggedInHospitalDistrict(res.data.hospitalDistrict);

          if (res.data.message === 'loginSuccess') {
            toast.success('successfully logged in ');
            props.setLoggedInProps(true);
            history.push('/dashboardpage');
          } else {
            toast.error(res.data.message);
          }
        })
        .catch((error) => {
          console.log(error);
        });

      // ____________after successful  verification In DB
      setCode('');
      LoginCodeField.value = '';
      setPassword('');
      LoginPasswordField.value = '';
    }
  };

  if (props.isLoggedInProps === false) {
    return (
      <>
        <div className="containerCenter">
          <div className="contentBlock">
            <form id="LoginPageI" onSubmit={loginHandler}>
              <div id="leftDivision">
                <img src={doctorBg} alt="" />
              </div>
              <div id="rightDivision">
                <section id="formContainer">
                  <h1 className="poppins_medium_500">
                    Let's protect yourself and those <br /> around you
                  </h1>

                  <label
                    id="defaultFormLable"
                    className="poppins_semibold_600"
                    htmlFor="default-radio"
                  >
                    I am joining as :
                  </label>

                  <div id="radioContainer">
                    <div className="radioCard">
                      {['radio'].map((type) => (
                        <div key={`default-${type}`} className="mb-3">
                          <Form.Check type={type} id={`default-${type}`} />
                        </div>
                      ))}
                      <label htmlFor="">Organization</label>
                    </div>
                    <div className="radioCard">
                      {['radio'].map((type) => (
                        <div key={`default-${type}`} className="mb-3">
                          <Form.Check type={type} id={`default-${type}`} />
                        </div>
                      ))}
                      <label htmlFor="">Hospital</label>
                    </div>
                  </div>
                  {/* _______________________first input  */}
                  <label
                    id="defaultFormLable"
                    className="poppins_semibold_600"
                    htmlFor="default-radio"
                  >
                    Code
                  </label>

                  <Form.Control
                    required
                    name="login_code_field"
                    id="login_code_field"
                    onChange={globalLoginHandler}
                    type="text"
                    placeholder="Enter code"
                  />
                  {/* ___________________second input */}
                  <label
                    id="defaultFormLable"
                    className="poppins_semibold_600"
                    htmlFor="default-radio"
                  >
                    Password
                  </label>

                  <Form.Control
                    required
                    name="login_password_field"
                    id="login_password_field"
                    onChange={globalLoginHandler}
                    type="password"
                    placeholder="Enter your password"
                  />
                </section>

                <div className="formSubmitContainer">
                  <Button variant="primary" type="submit">
                    Login
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  } else {
    return <Redirect to="/dashboardpage" />;
  }
};

export default LoginPageI;
