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
          testimonial-box
          <Modal
            onRequestClose={this.closeModal}
            isOpen={this.state.modalIsOpen}
            contentLabel='How Modal'
            style={modalStyles}>
            <HowItWorks
              closeModal={this.closeModal} />
          </Modal>
        </div>


        <div className='bg-image-wrapper' style={sectionStyle}>
          <button onClick={this.openModal}>How It Works</button>
        </div>

      </div>
    );
  }
}

export default Testimonial2;
