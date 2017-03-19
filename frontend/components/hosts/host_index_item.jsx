import React from 'react';
import { Link, hashHistory } from 'react-router';

class HostIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.fetchHost(this.props.host.id)
    .then( () => hashHistory.push(`/hosts/${this.props.host.id}`)
    );
  }

  render() {

    const host = this.props.host

    return(
      <div className='host-index-item' onClick={this.handleClick}>
        <img className='host-item-image'  src={host.image_url} />
        <div className="host-list-info">
          <div className='host-list-name'>
            {host.name}, {host.age}
          </div>
          <div className='host-list-interests'>
            {host.interests.join(" - ")}
          </div>
          <div className='host-list-status'>
            {host.status}
          </div>
        </div>


      </div>
    );
  }
}

export default HostIndexItem;
