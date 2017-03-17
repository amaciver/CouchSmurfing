import React from 'react';
import HostIndexItem from './host_index_item';

class HostIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const hosts = this.props.hosts.map( host => {
      <li>
        <HostIndexItem
          key={host.id}
          host={host} />
      </li>
    })
    return(
      <ul>
        {hosts}
      </ul>


    );
  }
}

export default HostIndex;
