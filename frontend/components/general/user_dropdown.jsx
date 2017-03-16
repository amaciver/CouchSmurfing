import React from 'react';

class UserDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.username,
      image_url: this.props.image_url
    }
  }

  redner() {

    let className;
    

    return (
      <div className='user-dropdown'>


      </div>
    );
  }
}
