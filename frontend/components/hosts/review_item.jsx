import React from 'react';

class ReviewItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    // debugger;
    this.props.deleteReview(this.props.review.id)
  }


  render() {
    let deleteButton;
    if (this.props.review.user.id === this.props.userId) {
      deleteButton =
      <div className='multicolumn-column'>
        <ul className='mod-buttons'>
          <button className="button" onClick={this.handleDelete}>
            Delete
          </button>
        </ul>
      </div>
    }
    return (
      <li className='list-item'>
        <div className='multicolumn'>
          <div className='card-content'>
            <div className='multicolumn-column'>
              <h3 className='card-content-title mod-tight'>
                {this.props.review.user.username}
              </h3>
              <ul>
                <li className='card-content-date'>
                  <small>
                    {new Date(this.props.review.created_at).toDateString()}
                  </small>
                </li>
              </ul>
              <p>{this.props.review.body}</p>
            </div>


          </div>
          {deleteButton}
        </div>
      </li>
    )
  }
}

export default ReviewItem;
