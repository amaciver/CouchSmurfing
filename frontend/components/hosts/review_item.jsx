import React from 'react';

class ReviewItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    debugger;
    this.props.removeReview(this.props.review.id)
  }


  render() {

    return (
      <li className='list-item'>
        <div className='multicolumn-column'>

          <p>{this.props.review.user.username}</p>
          <p>{this.props.review.body}</p>
        </div>
        <div className='multicolumn-column'>
          <ul className='mod-buttons'>
            <button className="button" onClick={this.handleDelete}>
              Delete
            </button>
          </ul>
        </div>
      </li>
    )
  }
}

export default ReviewItem;
