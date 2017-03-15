import React from 'react';

const UserView = () => (
  <div id="user-view" className="main-view">
    User View for {window.currentUser.username}
  </div>
)

export default UserView;
