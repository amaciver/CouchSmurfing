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



    return(
      <div className={className}>Cities Index</div>
    );
  }
}

export default CitiesIndex;
