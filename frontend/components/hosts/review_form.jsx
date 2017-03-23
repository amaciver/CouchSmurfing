import React from 'react';

class ReviewForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      body: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateBody = this.updateBody.bind(this);
    this.renderSubmitButton = this.renderSubmitButton.bind(this);

  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.props.user) {

      const review = {
        user_id: this.props.user.id,
        host_id: this.props.host.id,
        body: this.state.body
      }

      this.props.createReview(review)
      .then(this.props.closeModal);
    } else {
      this.props.closeModal()
    }
  }

  updateBody(e) {
    this.setState({body: e.currentTarget.value})
  }

  renderSubmitButton() {
    if (this.props.user) {
      return (
        <ul className='mod-buttons'>
          <button className="request-button" type='submit'>Submit</button>
        </ul>
      )
    } else {
      return (
        <ul className='mod-buttons'>
          <button className="request-button" type='submit'>Login to Submit</button>
        </ul>
      )
    }
  }

  render() {
    const placeholder = `Tell us about your experience with ${this.props.host.name}`
    return(
      <div className='review-form-wrapper'>
        <div className="box-header">
          <h1 className='box-header-title'>Leave a review for {this.props.host.name}</h1>
        </div>
        <div className="box-content">
          <form onSubmit={this.handleSubmit}>
            <div className='form-content'>

              <fieldset>
                <label className='is-required'>Review</label>
                <textarea onChange={this.updateBody} placeholder={placeholder} height='158px'></textarea>
              </fieldset>
            </div>
            <div className='form-actions'>
              {this.renderSubmitButton()}
            </div>

          </form>

        </div>

      </div>
    );
  }
}

export default ReviewForm;
