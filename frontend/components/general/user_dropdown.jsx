import React from 'react';

class UserDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.username,
      image_url: this.props.image_url
    }
  }

  render() {

    let className;


    return (
      <div>
        <img className='dropdown-image' src={this.state.image_url} />
        <div className='user-dropdown'>
          <div>

          </div>

        </div>
      </div>
    );
  }
}

export default UserDropdown;
