import React from 'react';
import LandingHeader from './landing_header';


const LandingView = () => (
  <div id="landing-view" className="main-view">
    <LandingHeader />
    <div id="landing-splash" className="bg-image">
      <img src='/assets/smurfs-banner.jpg' width="100%" />
    </div>
    <Testimonial />
    <Testimonial />
    <CitiesIndexContainer type="landing" />

  </div>
);

export default LandingView;
