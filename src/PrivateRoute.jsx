import React from 'react';
import { Redirect } from 'react-router';
import { Route } from 'react-router-dom';
import DashboardPage from './components/5pages/DashboardPage';
const PrivateRoute = (props) => {
  if (props.loggedInStateProps === true) {
    return (
      <>
        <Route
          path="/dashboardpage"
          component={() => {
            return (
              <DashboardPage
                setLoggedInHotpitalPhNo={props.setLoggedInHotpitalPhNo}
                isInitialHospitalAlreadySet={props.isInitialHospitalAlreadySet}
                setIsInitialHospitalAlreadySet={
                  props.setIsInitialHospitalAlreadySet
                }
                loggedInHospitalDetail={props.loggedInHospitalDetail}
              />
            );
          }}
        />
      </>
    );
  } else {
    return (
      <>
        <Redirect to="/" />
      </>
    );
  }
};

export default PrivateRoute;
