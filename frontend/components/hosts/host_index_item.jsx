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
    let statusClass;

    const host = this.props.host

    if (host.status === "Not Accepting Guests") {
      statusClass = 'host-list-status mod-negative';
    } else {
      statusClass = 'host-list-status mod-positive';
    }

    return(
      <div className='host-index-item' onClick={this.handleClick}>
        <div className='host-image-wrapper'>

          <img className='host-item-image'  src={host.image_url} />
        </div>
        <div className="host-list-info">
          <div className='host-list-name'>
            {host.name}, {host.age}
          </div>
          <div className='host-list-interests'>
            {host.interests.join(" - ")}
          </div>
          <div className={statusClass}>
            {host.status}
          </div>
        </div>


      </div>
    );
  }
}

export default HostIndexItem;
