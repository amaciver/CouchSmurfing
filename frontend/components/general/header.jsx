import React from 'react';
import SearchContainer from './search_container';


class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div id="general-header" className="landing-header">
        <div className="landing-header-left">
          <img
            src="http://res.cloudinary.com/couchsmurfing/image/upload/v1489604248/logo_atjhje.jpg"
            width="30"
            height="30" />
          <div className="brand-name">CouchSmurfing</div>
          Hello {this.props.user.username}
        </div>
        <SearchContainer text="Explore Cities" />
        <div>
          <UserDropdownContainer />
        </div>
      </div>
    );
  }
}

export default Header;
