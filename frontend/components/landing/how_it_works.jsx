import React from 'react'

const HowItWorks = (props) => (
  <div>How It Works
    <img className="x-box"
      src='http://res.cloudinary.com/couchsmurfing/image/upload/v1489604610/close-icon_mzdzio.png'
      width="20"
      height="20"
      onClick={props.closeModal}/>
  </div>
);

export default HowItWorks;
