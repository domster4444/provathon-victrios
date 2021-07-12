import { Redirect } from 'react-router-dom';

import React from 'react';

import Notice from '../1atoms/Notice.jsx';

export default function Homepage(props) {
  if (props.isLoggedInProps === false) {
    return (
      <div id="homepage">
        <Notice />
      </div>
    );
  } else {
    return <Redirect to="/dashboardpage" />;
  }
}
