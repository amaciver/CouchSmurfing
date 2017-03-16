import React from 'react';
import { router, hashHistory} from 'react-router';

class UserDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.username,
      image_url: this.props.image_url,
      dropdown: "user-dropdown hidden"
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleClick(state) {
    return () => {
      if (state === "user-dropdown") {
        return this.setState({dropdown: "user-dropdown hidden"});
      } else {
        return this.setState({dropdown: "user-dropdown"});
      }
    };
  }

  handleLogout() {
    this.props.logout().then( () => hashHistory.push('/about'));
  }

  render() {

    let className;


    return (
      <div className="dropdown-wrapper">
        <img className='dropdown-image' onClick={this.handleClick(this.state.dropdown)} src={this.state.image_url} />
        <div className={this.state.dropdown}>
          <div>
            {this.state.username}
            <button onClick={this.handleLogout}>
              Logout
            </button>

          </div>

        </div>
      </div>
    );
  }
}

export default UserDropdown;
