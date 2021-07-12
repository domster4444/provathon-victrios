import { BrowserRouter as Router, Route } from 'react-router-dom';
import './scss/main.css';
// --tostify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from '../src/components/1atoms/Header';
import CovidStatusPage from '../src/components/5pages/CovidStatus.jsx';
import HospitalService from '../src/components/5pages/HospitalService.jsx';
import HomePage from './components/5pages/HomePage';
import SignUpPage from './components/5pages/RegisterPageI';
import LoginPage from './components/5pages/LoginPageI';
import ForgotPasswordPage from './components/5pages/ForgotPasswordPage';
import PageNotFound from './components/5pages/PageNotFound';
import { useState } from 'react';
import { css } from 'styled-components';
import PrivateRoute from './PrivateRoute';
function App() {
  return (
    <>
      <Router>
        <Header></Header>

        <Route exact path="/" component={() => <HomePage />} />
        <Route path="/signup" component={() => <SignUpPage />} />
        <Route path="/login" component={() => <LoginPage />} />
        <Route path="/forgotpassword" component={ForgotPasswordPage} />
        <Route path="/404" component={PageNotFound} />

        <Route path="/hospitalservice" component={() => <HospitalService />} />
        <Route path="/covidstatus" component={() => <CovidStatusPage />} />

        <PrivateRoute />
      </Router>
      <ToastContainer toastClassName={css({ fontSize: '20rem' })} />
    </>
  );
}

export default App;
