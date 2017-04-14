import React from 'react';
import Modal from 'react-modal';
import { withRouter, hashHistory } from 'react-router';
import SearchContainer from './search_container';
import UserDropdownContainer from './user_dropdown_container';
import AuthFormContainer from '../auth/auth_form_container';

const authStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      formType: "login"
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.closeModalCB = this.closeModalCB.bind(this);
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  componentWillUpdate() {
  }

  openModal(formType) {
    return () => {
      this.setState({modalIsOpen: true, formType:formType});
    }
  }

  closeModal() {
    this.setState({modalIsOpen: false}, () => this.props.clearErrors())
  }
  closeModalCB(cb) {
    this.setState({modalIsOpen: false}, ()=> {
      this.props.clearErrors();
      if (cb) {
        cb();
      }
    });
  }

  render(){
    let username;
    let dropdown;

    if (this.props.user) {
      username = this.props.user.username;
      dropdown = <div>
        <UserDropdownContainer />
      </div>
    } else {
      dropdown =
      <div>

        <div>
          <ul className='header-nav-buttons-list'>
            <li className='header-nav-buttons-list-item'>
              <button className='request-button' onClick={this.openModal('demo')}>Demo</button>
            </li>
            <li className='header-nav-buttons-list-item'>
              <button className='request-button' onClick={this.openModal('signup')}>Sign Up</button>
            </li>
            <li className='header-nav-buttons-list-item'>
              <button className='button mod-outline mod-blue' onClick={this.openModal("login")}>Log In</button>
            </li>
          </ul>
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel='Auth Modal'
          style={authStyles}
          >
          <AuthFormContainer
            formType={this.state.formType}
            closeModal={this.closeModal}
            closeModalCB={this.closeModalCB}
            openModal={this.openModal}/>

        </Modal>
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
