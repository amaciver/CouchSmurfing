import React from 'react';
import Header from '../general/header';
import UserCard from '../user/user_card';
import { withRouter } from 'react-router'
import Modal from 'react-modal';

class HostView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user,
      host: props.host
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

          <div className='back-link' onClick={() => this.props.router.goBack()}>
            <i className="fa fa-chevron-left fa-2x" aria-hidden="true"></i>
            Back
          </div>

          <UserCard type="host-card" host={this.state.host}/>

          <Modal>
            <RequestFormContainer />

          </Modal>

        </div>
      </div>
    );
  }
}

export default withRouter(HostView);
