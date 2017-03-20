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
    // this.props.fetchHost(this.props.params.hostId);
  }

  componentDidMount() {
    // this.props.fetchHost(this.props.params.hostId);
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

          <div className='column mod-sidebar'>
            <div className='box'>
              <UserCard type="host-card" host={this.state.host}/>
            </div>
          </div>

          <div className='column mod-main'>
            <section className='box'>
              <div className="box-content mod-padded">
                <div className="multicolumn">
                  <div className="multicolumn-column">
                    <h1>
                      <span className='mod-large mod-positive'>{this.state.host.status}</span>
                    </h1>
                    <button className="request-button" onClick={this.openModal}>
                      <i className="fa fa-bed fa-2x mod-on-left" aria-hidden="true"> </i>
                      Request
                    </button>
                  </div>
                </div>
              </div>
            </section>

            <section className="box">
              <header className='box-header'>
                <h3 className='box-header-title'>
                  Overview
                </h3>
              </header>
              <div className='box-content mod-padded'>
                <div className='multicolumn'>
                  <div className='multicolumn-column mod-1-2'>
                    <ul>
                      <li>
                        <span>{this.state.host.sex}, {this.state.host.age}</span>
                      </li>
                      <li>
                        <span>{this.state.host.interests}</span>
                      </li>
                      <li>
                        <span>{this.state.host.location}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="box">
              <header className='box-header'>
                <h3 className='box-header-title'>
                  About Me
                </h3>
              </header>
              <div className='box-content mod-padded'>
                <p>{this.state.host.about_me}</p>
              </div>
            </section>

            <section className="box">
              <header className='box-header'>
                <h3 className='box-header-title'>
                  Reviews
                </h3>
              </header>
              <div className='box-content mod-padded'>
                <p>Review</p>
              </div>
            </section>


          </div>
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            contentLabel='Request Modal'
            style={requestStyles}>
            <RequestFormContainer
              closeModal={this.closeModal}/>
          </Modal>
        </div>
      </div>
    );
  }
}

export default withRouter(HostView);
