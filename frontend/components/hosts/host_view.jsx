import React from 'react';
import Header from '../general/header';
import UserCard from '../user/user_card';

class HostView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user
    };
  }

  componentDidMount() {
    this.props.fetchHost(this.props.params.hostId)
  }

  render() {
    return (
      <div id="host-view" className="user-main-view">
        <Header user={this.state.user} />
        <div id='host-view-content' className='user-view-content'>
          Host View
          <UserCard />
        </div>
      </div>
    );
  }
}

export default HostView;
