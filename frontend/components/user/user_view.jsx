import React from 'react';
import Header from '../general/header';
import UserCard from './user_card';
import CitiesIndexContainer from '../cities/cities_index_container';

class UserView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user
    };
  }

  render() {
    return (
      <div id="user-view" className="user-main-view">
        <Header user={this.state.user} />
        <div id='user-view-content' className='view-content'>
          <UserCard />
          <CitiesIndexContainer type='user-view' />
        </div>
      </div>
    );
  }
}

export default UserView;
