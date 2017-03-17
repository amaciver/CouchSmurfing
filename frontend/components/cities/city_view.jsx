import React from 'react';
import Header from '../general/header';
import HostIndexContainer from '../hosts/host_index_container';


class CityView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user
    };
  }

  componentDidMount(){
    this.props.fetchCity(this.props.params.cityId)
    this.props.fetchHosts(this.props.params.cityId)
  }

  render() {

    const imageStyle = {
      background: `linear-gradient(rgba(0, 0, 0, 0.45),
      rgba(0, 0, 0, 0.45)),
      url(${this.props.city.banner_url})`,
      width: "100%",
      backgroundSize: "cover",
      height: "400px"
    }


    return (
      <div id="city-view" className="user-main-view">
        <Header user={this.state.user} />
        <div id='city-view-content' className='city-view-content'>
          <div id="city-splash" className="splash-wrapper" style={imageStyle}>
              <h1>{this.props.city.name}</h1>
          </div>
          <div className='city-description'>{this.props.city.description}</div>
          <div className='hosts-index'>
            <HostIndexContainer />

          </div>
          <div className='gmaps'>

          </div>
        </div>

      </div>
    );
  }
}

export default CityView;
