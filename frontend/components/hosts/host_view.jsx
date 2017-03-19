import React from 'react';
import Header from '../general/header';
import UserCard from '../user/user_card';
import { withRouter } from 'react-router'
import Modal from 'react-modal';
import RequestFormContainer from './request_form_container';


const requestStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};


class HostView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user,
      host: props.host,
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillMount() {
    Modal.setAppElement('body');
    this.props.fetchHost(this.props.params.hostId);
  }

  componentDidMount() {
    this.props.fetchHost(this.props.params.hostId);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div id="host-view" className="user-main-view">
        <Header user={this.state.user} />
        <div id='host-view-content' className='host-view-content'>

          <div className='back-link' onClick={() => this.props.router.goBack()}>
            <i className="fa fa-chevron-left fa-2x" aria-hidden="true"></i>
            Back
          </div>

          <UserCard type="host-card" host={this.state.host}/>

          <div>
            <button className="request-button" onClick={this.openModal}>
              <i className="fa fa-bed fa-2x" aria-hidden="true"> </i>
              Request

            </button>
          </div>

          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            contentLabel='Request Modal'
            style={requestStyles}
            >
            <RequestFormContainer
              closeModal={this.closeModal}/>

          </Modal>

        </div>
      </div>
    );
  }
}

export default withRouter(HostView);
