import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';

class CitiesIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    let className;
    if (this.props.type === "user-view") {
      className = "cities-user-view";
    }

    return(
      <div className={className}>Index</div>
    );
  }
}

export default CitiesIndex;
