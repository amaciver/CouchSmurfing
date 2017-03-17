import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';

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

    const names = this.props.cities.map( city => city.name + " " );

    return(
      <div className={className}>
        <h3>
          Cities Index
        </h3>
        {names}
      </div>
    );
  }
}

export default CitiesIndex;
