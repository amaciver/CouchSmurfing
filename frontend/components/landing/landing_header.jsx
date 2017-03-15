import React from 'react';
import AuthFormContainer from '../auth/auth_form_container';
import Modal from 'react-modal';

class LandingHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      formType: "login"
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  openModal(formType) {
    return () => {
      this.setState({modalIsOpen: true, formType:formType});
    }
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }



  render() {

    let currentUser;
    if (window.currentUser) {
      currentUser = window.currentUser.username;
    }

    return (
      <div id="landing-header" className="landing-header">
        <div>
          <img src="/assets/logo.jpeg" width="30" height="30" />
          Hello {currentUser}
        </div>
        <div>
          <button onClick={this.openModal('signup')}>Sign Up</button>
          <button onClick={this.openModal("login")}>Log In</button>
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          contentLabel='Auth Modal'>
          <AuthFormContainer
            formType={this.state.formType}
            closeModal={this.closeModal}/>
        </Modal>
      </div>
    );
  }
}

export default LandingHeader;
