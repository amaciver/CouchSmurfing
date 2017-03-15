import React from 'react';
import LandingHeader from './landing_header';
import CitiesIndexContainer from '../cities/cities_index_container';
import Testimonial from './testimonial';


const LandingView = () => (
  <div id="landing-view" className="main-view">
    <LandingHeader />
    <div id="landing-splash" className="bg-image-wrapper">
      <img src='/assets/smurfs-banner.jpg' width="100%" />
    </div>
    <Testimonial source='/assets/care-bears-banner.jpeg'  />
    <Testimonial source='/assets/thundercats-banner.jpeg'/>
    <CitiesIndexContainer type="landing" />

  </div>
);

export default LandingView;
