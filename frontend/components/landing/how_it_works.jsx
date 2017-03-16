import React from 'react'

const HowItWorks = (props) => (
  <div>
    <img className="x-box"
      src='http://res.cloudinary.com/couchsmurfing/image/upload/v1489604610/close-icon_mzdzio.png'
      width="20"
      height="20"
      onClick={props.closeModal}/>
    <div>How It Works</div>
    <p>Explore cities by connecting with your favorite cartoon
      characters from the 1980's.
    Search for your favorite realm or kingdom, select a host who shares your interests, and request to stay with them. That's it!</p>
  </div>
);

export default HowItWorks;
