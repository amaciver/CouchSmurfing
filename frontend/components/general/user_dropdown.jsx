import React from 'react';
import { Link, router, hashHistory} from 'react-router';

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
          <ul className='dropdown-links-list'>
            <li className='dropdown-links-list-item'>
              <Link className='dropdown-link' to="/">
                My Dashboard
              </Link>
            </li>

            <li className='dropdown-links-list-item'>
              <Link className='dropdown-link' onClick={this.handleLogout}>
                Logout
              </Link >
            </li>

          </ul>

        </div>
      </div>
    );
  }
}

export default UserDropdown;
