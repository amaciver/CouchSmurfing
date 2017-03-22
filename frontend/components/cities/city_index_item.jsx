import React from 'react';
import {Link, hashHistory} from 'react-router';

class CityIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.fetchCity(this.props.id).then(

      hashHistory.push(`/cities/${this.props.id}`)
    )
  }

  render() {
    const imageStyle = {
      background: `
      url(${this.props.imageUrl})`,
      backgroundSize: "cover",
      width: "100%"
    }

    return(


        <div className='grid-item'>

          <div className='image-item mod-image' style={imageStyle} onClick={this.handleClick}>
            <header className='grid-item-header'>
              <h1 className='grid-item-header-title'>
                {this.props.name}
              </h1>

            </header>
          </div>
        </div>

    );
  }
}
// <div className='city-index-item-wrapper'>
//   <div className="city-index-item" style={imageStyle} onClick={this.handleClick} >
//     <p>{this.props.name}</p>
//   </div>
// </div>
export default CityIndexItem;
