import React from 'react';
import LandingHeaderContainer from './landing_header_container';
import CitiesIndexContainer from '../cities/cities_index_container';
import Testimonial1 from './testimonial1';
import Testimonial2 from './testimonial2';


const LandingView = () => {
  const imageStyle = {
    background: `linear-gradient(rgba(0, 0, 0, 0.45),
    rgba(0, 0, 0, 0.45)),
    url("https://res.cloudinary.com/couchsmurfing/image/upload/v1489604611/smurfs-banner_uks7vm.jpg")`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  }
  window.scrollTo(0,0)
  return (
    <div id="landing-view" className="main-view">
      <LandingHeaderContainer />

      <div className='splash-wrapper'>
        <div id="landing-splash" className="splash" style={imageStyle}>
          <h1>Stay with 80s Cartoons and Meet Your Heroes </h1>
        </div>

      </div>
      <Testimonial1 source='https://res.cloudinary.com/couchsmurfing/image/upload/v1489604611/care-bears-banner_qdmud7.jpg'  />
      <Testimonial2 source='https://res.cloudinary.com/couchsmurfing/image/upload/c_crop,g_west,h_658,w_849,x_0/v1490317356/heman_test3_ixzg3a.jpg'/>
      <CitiesIndexContainer type="landing" />

    </div>
  );
}

export default LandingView;
