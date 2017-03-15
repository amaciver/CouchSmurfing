import React from 'react';
import LandingHeader from './landing_header';
import CitiesIndexContainer from '../cities/cities_index_container';
import Testimonial from './testimonial';


const LandingView = () => {
  const imageStyle = {
    background: `linear-gradient(rgba(0, 0, 0, 0.45),
    rgba(0, 0, 0, 0.45)),
    url("http://res.cloudinary.com/couchsmurfing/image/upload/v1489604611/smurfs-banner_uks7vm.jpg")`,
    width: "100%",
    backgroundSize: "cover",
    height: "400px"
  }
  return (
    <div id="landing-view" className="main-view">
      <LandingHeader />
      <div id="landing-splash" className="bg-image-wrapper" style={imageStyle}>

      </div>
      <Testimonial source='http://res.cloudinary.com/couchsmurfing/image/upload/v1489604611/care-bears-banner_qdmud7.jpg'  />
      <Testimonial source='http://res.cloudinary.com/couchsmurfing/image/upload/v1489604611/thundercats-banner_triz12.jpg'/>
      <CitiesIndexContainer type="landing" />

    </div>
  );
}

export default LandingView;
