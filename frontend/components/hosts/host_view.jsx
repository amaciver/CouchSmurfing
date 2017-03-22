import React from 'react';
import Header from '../general/header';
import UserCard from '../user/user_card';
import { withRouter } from 'react-router'
import Modal from 'react-modal';
import RequestFormContainer from './request_form_container';
import ReviewFormContainer from './review_form_container';
import ReviewItemContainer from './review_item_container';


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
      requestModalIsOpen: false,
      reviewModalIsOpen: false
    };
    this.openRequestModal = this.openRequestModal.bind(this);
    this.closeRequestModal = this.closeRequestModal.bind(this);
    this.openReviewModal = this.openReviewModal.bind(this);
    this.closeReviewModal = this.closeReviewModal.bind(this);
    props.fetchReviews(props.params.hostId);
  }

  componentWillMount() {
    Modal.setAppElement('body');
    this.props.fetchHost(this.props.params.hostId);
  }

  componentDidMount() {
  }

  openRequestModal() {
    if (this.props.user) {

    }
    this.setState({requestModalIsOpen: true});
  }

  closeRequestModal() {
    this.setState({requestModalIsOpen: false});
  }

  openReviewModal() {
    if (this.props.user) {
    }
    this.setState({reviewModalIsOpen: true});
  }

  closeReviewModal() {
    this.setState({reviewModalIsOpen: false});
  }

  render() {
    const reviews = this.props.reviews.map( (review, idx) => {
      return(
        <ReviewItemContainer key={idx} review= {review} />
      );
    }).reverse();

    return (
      <div id="host-view" className="user-main-view">
        <Header user={this.props.user} />
        <div id='host-view-content' className='host-view-content main'>
          <div className='back-link' onClick={() => this.props.router.goBack()}>
            <i className="fa fa-chevron-left fa-2x" aria-hidden="true"></i>
            Back
          </div>


          <div className='column mod-sidebar'>

            <UserCard type="host-card" host={this.props.host}/>

            <div className='box'>
              <header className='box-header'>
                <h3 className='box-header-title'>
                  My Home
                </h3>
              </header>
              <div className='box-content mod-padded'>
                <figure>
                  <img src={this.props.host.house_image_url} width='100%' />
                </figure>
              </div>
            </div>
          </div>

          <div className='column mod-main'>
            <section className='box'>
              <div className="box-content mod-padded">
                <div className="multicolumn">
                  <div className="multicolumn-column">
                    <h1>
                      <span className='mod-large mod-positive'>{this.props.host.status}</span>
                    </h1>
                  </div>
                  <div className='multicolumn-column'>
                    <ul className='mod-buttons'>
                      <button className="request-button" onClick={this.openRequestModal}>
                        <i className="fa fa-bed fa-2x mod-on-left" aria-hidden="true"> </i>
                        Request
                      </button>
                    </ul>
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
                        <span>{this.props.host.sex}, {this.props.host.age}</span>
                      </li>
                      <li>
                        <span>{this.props.host.interests}</span>
                      </li>
                      <li>
                        <span>{this.props.host.location}</span>
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
                <p>{this.props.host.about_me}</p>
              </div>
            </section>

            <section className="box">
              <div className='box-header multicolumn'>
                <div className='multicolumn-column'>
                  <h3 className='box-header-title'>
                    Reviews
                  </h3>
                </div>
                <div className='multicolumn-column'>
                  <ul className='mod-buttons'>
                    <button className="request-button" onClick={this.openReviewModal}>
                      <i className="fa fa-pencil-square-o fa-2x mod-on-left" aria-hidden="true"> </i>
                      Leave Review
                    </button>
                  </ul>
                </div>

              </div>
              <div className='box-content mod-padded'>
                <ul>
                  {reviews}
                  <div className='multicolumn-column'>
                    <ul className='mod-buttons'>
                      <button className="request-button" onClick={this.openReviewModal}>
                        <i className="fa fa-pencil-square-o fa-2x mod-on-left" aria-hidden="true"> </i>
                        Leave Review
                      </button>
                    </ul>
                  </div>
                </ul>
              </div>
            </section>


          </div>
          <Modal
            isOpen={this.state.requestModalIsOpen}
            onRequestClose={this.closeRequestModal}
            contentLabel='Request Modal'
            style={requestStyles}>

            <RequestFormContainer
              closeModal={this.closeRequestModal}/>

          </Modal>
          <Modal
            isOpen={this.state.reviewModalIsOpen}
            onRequestClose={this.closeReviewModal}
            contentLabel='Review Modal'
            style={requestStyles}>
            <ReviewFormContainer
              closeModal={this.closeReviewModal}/>
          </Modal>
        </div>
      </div>
    );
  }
}

export default withRouter(HostView);
