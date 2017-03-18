import React from 'react';
import LandingHeader from './landing_header';
import CitiesIndexContainer from '../cities/cities_index_container';
import Testimonial1 from './testimonial1';
import Testimonial2 from './testimonial2';


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
      <div>
        <div id="landing-splash" className="splash-wrapper" style={imageStyle}>
          <h1>Stay with 80s Cartoons and Meet Your Heroes </h1>
        </div>

      </div>
      <Testimonial1 source='http://res.cloudinary.com/couchsmurfing/image/upload/v1489604611/care-bears-banner_qdmud7.jpg'  />
      <Testimonial2 source='http://res.cloudinary.com/couchsmurfing/image/upload/v1489875434/splashes/heman_test.png'/>
      <CitiesIndexContainer type="landing" />

    </div>
  );
}

export default LandingView;
