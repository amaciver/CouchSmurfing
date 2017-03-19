import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';
import CityIndexItem from './city_index_item';

class CitiesIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCities("");
  }

  render(){
    let className;
    if (this.props.type === "user-view") {
      className = "cities-user-view";
    }

    const cities = this.props.cities.map( city => (
      <CityIndexItem key={city.id} id={city.id} name={city.name} imageUrl={city.image_url} />
    ));

    return(
      <div className={className}>
        <h3>
          Where do you want to go?
        </h3>
        <div className='cities-index'>
          {cities}
        </div>
      </div>
    );
  }
}

export default CitiesIndex;
