import React from 'react';
import {Link, hashHistory} from 'react-router';

class CityIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    hashHistory.push(`/cities/${this.props.id}`)
  }

  render() {
    const imageStyle = {
      background: `linear-gradient(rgba(0, 0, 0, 0.45),
      rgba(0, 0, 0, 0.45)),
      url(${this.props.imageUrl})`,
      backgroundSize: "cover"
    }

    return(
      <div className='city-index-item-wrapper'>
        <div className="city-index-item" style={imageStyle} onClick={this.handleClick} >
          <p>{this.props.name}</p>
        </div>
      </div>
    );
  }
}
export default CityIndexItem;
