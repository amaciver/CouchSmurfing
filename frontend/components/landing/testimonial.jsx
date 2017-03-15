import React from 'react';

const Testimonial = (props) => {
  const sectionStyle = {
    background: `linear-gradient(rgba(0, 0, 0, 0.45),
    rgba(0, 0, 0, 0.45)),
    url(${props.source})`,
    width: "100%",
    backgroundSize: "cover",
    height: "500px"
  }
  return (
    <div className='testimonial-main'>
      <div className='testimonial-content'>
        testimonial
        end
      </div>
      <div className='bg-image-wrapper' style={sectionStyle}>

      </div>

    </div>
  );
}

export default Testimonial;
