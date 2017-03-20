import React from 'react';

class ReviewForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      body: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateBody = this.updateBody.bind(this);

  }

  handleSubmit(e) {
    e.preventDefault();
    const review = {
      user_id: this.props.user.id,
      host_id: this.props.host.id,
      body: this.state.body
    }

    this.props.createReview(review)
      .then(() => this.props.fetchReviews(this.props.host.id))
      .then(this.props.closeModal);
    // console.log(request);
  }

  updateBody(e) {
    this.setState({body: e.currentTarget.value})
  }

  render() {
    const placeholder = `Tell us about your experience with ${this.props.host.name}`
    return(
      <div className='request-form-wrapper'>
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
              <ul className='mod-buttons'>
                <button className="request-button" type='submit'>Submit</button>
              </ul>
            </div>

          </form>

        </div>

      </div>
    );
  }
}

export default ReviewForm;
