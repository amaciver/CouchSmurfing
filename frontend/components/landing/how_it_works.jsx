import React from 'react'

const HowItWorks = (props) => (
  <div id="how-it-works">
    <div className="box-header">
      <h1 className='box-header-title'>How It Works</h1>
      <ul className='mod-buttons'>

        <img className="x-box"
          src='https://res.cloudinary.com/couchsmurfing/image/upload/v1489604610/close-icon_mzdzio.png'
          width="20"
          height="20"
          onClick={props.closeModal}/>
      </ul>
    </div>
    <div className="box-content">
      <p>Explore cities by connecting with your favorite cartoon
        characters from the 1980's.
        Search for your favorite realm or kingdom,
        select a host who shares your interests,
        and request to stay with them.</p>
      <h4> That's it!</h4>
    </div>
  </div>
);

export default HowItWorks;
