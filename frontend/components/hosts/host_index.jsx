import React from 'react';
import HostIndexItem from './host_index_item';

class HostIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const hosts = this.props.hosts.map( host => (
      <HostIndexItem
        key={host.id}
        host={host} />
    ));
    return(
      <div className='host-index-list'>
        <div className='hosts-header'>
          Hosts
        </div>
        {hosts}
      </div>


    );
  }
}

export default HostIndex;
