import React from 'react';
import { Link, hashHistory } from 'react-router';

class HostIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    hashHistory.push(`/hosts/${this.props.host.id}`)
  }

  render() {

    const host = this.props.host

    return(
      <div className='host-index-item'>
        <img className='dropdown-image' onClick={this.handleClick} src={host.image_url} />
        {host.name}


      </div>
    );
  }
}

export default HostIndexItem;
