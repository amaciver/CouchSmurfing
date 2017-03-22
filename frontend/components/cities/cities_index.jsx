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
      <CityIndexItem key={city.id} id={city.id} name={city.name} imageUrl={city.image_url} fetchCity={this.props.fetchCity}/>
    ));

    return(
      <div className={className}>
        <section className='box'>
          <header className='box-header'>
            <h1 className='box-header-title'>
              <i className="fa fa-binoculars mod-on-left" aria-hidden="true"></i>
              Explore Cities
            </h1>
          </header>
          <div className='box-content mod-padded'>
            <div className='grid-items'>
              {cities}
            </div>

          </div>


        </section>

      </div>
    );
  }
}

// <h3>
//   Where do you want to go?
// </h3>
// <div className='cities-index'>
//   {cities}
// </div>
export default CitiesIndex;
