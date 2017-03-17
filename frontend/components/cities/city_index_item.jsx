import React from 'react';
import {Link} from 'react-router';

class CityIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const imageStyle = {
      background: `linear-gradient(rgba(0, 0, 0, 0.45),
      rgba(0, 0, 0, 0.45)),
      url(${this.props.imageUrl})`,
      width: "200px",
      backgroundSize: "cover",
      height: "200px"
    }

    return(
      <div className="city-index-item" style={imageStyle}>
        <h3><Link to={`cities/${this.props.id}`}>{this.props.name}</Link></h3>
      </div>
    );
  }
}
export default CityIndexItem;
