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

class Testimonial2 extends React.Component {
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
      <div className='testimonial2-main'>

        <div className='testimonial-content-left'>
          <div className="testimonial-header">
            <h3>connected with</h3>
          </div>
          <figure className='testimonial-image mod-float-right'>
            <img
              src="http://res.cloudinary.com/couchsmurfing/image/upload/c_pad,h_526,w_526/v1489872645/Smurfs/papa_smurf_head.png"
              className='testimonial-headshot' />
            <figcaption>Papa Smurf</figcaption>
          </figure>
          <figure className='testimonial-image mod-float-left'>
            <img
              src="http://res.cloudinary.com/couchsmurfing/image/upload/v1489874768/headshots/profile_photo2_head.png"
              className='testimonial-headshot' />
            <figcaption>Carlos</figcaption>
          </figure>
        </div>


        <div className='test-mod-right' style={sectionStyle}>
          <h1>Meet celebrities</h1>
          <button onClick={this.openModal}>How It Works</button>
        </div>

      </div>
    );
  }
}

export default Testimonial2;
