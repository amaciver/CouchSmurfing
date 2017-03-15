import React from 'react';

const Testimonial = (props) => (
  <div className='testimonial-main'>
    <div>
      testimonial
    </div>
    <div className='bg-image-wrapper'>
      <img className='bg-image' src={props.source}/>
    </div>

  </div>
);

export default Testimonial;
