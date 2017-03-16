import React from 'react';


class UserView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user
    };
  }

  render() {
    return (
      <div id="user-view" className="main-view">
        User View for {this.state.user.username}
      </div>
    );
  }
}

export default UserView;
