import { Redirect } from 'react-router-dom';

import React from 'react';

import Notice from '../1atoms/Notice.jsx';

import HeroSection from '../4templates/HeroSection';
import AdditionalServiceSection from '../4templates/AdditionalServiceSection';
import DoubtSection from '../4templates/DoubtSection';
import ExperienceSection from '../4templates/ExperienceSection';
import ArrowGhostCardSection from '../4templates/ArrowGhostCardSection';

export default function Homepage(props) {
  if (props.isLoggedInProps === false) {
    return (
      <div id="homepage">
        <Notice />
        <HeroSection></HeroSection>
        <AdditionalServiceSection></AdditionalServiceSection>
        <DoubtSection />
        <ArrowGhostCardSection />
        <ExperienceSection />
      </div>
    );
  } else {
    return <Redirect to="/dashboardpage" />;
  }
}
