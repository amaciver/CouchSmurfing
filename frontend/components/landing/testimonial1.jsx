import React from 'react';
import Modal from 'react-modal';
import HowItWorks from './how_it_works';

const modalStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class Testimonial1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,

    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  openModal(formType) {
    this.setState({modalIsOpen: true, formType:formType});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    const sectionStyle = {
      background: `linear-gradient(rgba(0, 0, 0, 0.45),
      rgba(0, 0, 0, 0.45)),
      url(${this.props.source})`,
      width: "100%",
      backgroundSize: "cover",
      height: "500px"
    }
    return (
      <div className='testimonial2-main' >

        <div className='testimonial-content-right'>
          <div className="testimonial-header">
            <h3>CONNECTED WITH</h3>
          </div>
          <figure className='testimonial-image mod-float-right'>
            <img
              src="http://res.cloudinary.com/couchsmurfing/image/upload/v1489872613/liono_head_hp1oom.png"
              className='testimonial-headshot' />
            <figcaption>Liono</figcaption>
          </figure>
          <figure className='testimonial-image mod-float-left'>
            <img
              src="http://res.cloudinary.com/couchsmurfing/image/upload/v1489874358/headshots/profile_photo1_head.png"
              className='testimonial-headshot' />
            <figcaption>Jane</figcaption>
          </figure>



          <Modal
            onRequestClose={this.closeModal}
            isOpen={this.state.modalIsOpen}
            contentLabel='How Modal'
            style={modalStyles}>
            <HowItWorks
              closeModal={this.closeModal} />
          </Modal>
        </div>


        <div className='test-mod-left' style={sectionStyle}>
          <h1>Meet celebrities</h1>
          <button onClick={this.openModal}>How It Works</button>
        </div>

      </div>
    );
  }
}

export default Testimonial1;
