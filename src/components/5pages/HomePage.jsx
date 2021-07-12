import { Redirect } from 'react-router-dom';

import React from 'react';

import Notice from '../1atoms/Notice.jsx';

import HeroSection from '../4templates/HeroSection';
import AdditionalServiceSection from '../4templates/AdditionalServiceSection';
export default function Homepage(props) {
  if (props.isLoggedInProps === false) {
    return (
      <div id="homepage">
        <Notice />
        <HeroSection></HeroSection>
        <AdditionalServiceSection></AdditionalServiceSection>
      </div>
    );
  } else {
    return <Redirect to="/dashboardpage" />;
  }
}
