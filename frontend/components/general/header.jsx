import React from 'react';
import { withRouter, hashHistory } from 'react-router';
import SearchContainer from './search_container';
import UserDropdownContainer from './user_dropdown_container';


class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    let username;
    let dropdown;

    if (this.props.user) {
      username = this.props.user.username;
      dropdown = <div>
        <UserDropdownContainer />
      </div>

    }
    return (
      <header className='header'>
        <div id="general-header" className="header-wrapper">
          <div className="header-content">
            <div className='brand' onClick={() => hashHistory.push('/')}>
              <img
                className='brand-icon'
                src="https://res.cloudinary.com/couchsmurfing/image/upload/v1489604248/logo_atjhje.jpg"
                />
              <div className="brand-name">CouchSmurfing</div>
            </div>

            <SearchContainer text="Explore Cities" />
            {dropdown}
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
