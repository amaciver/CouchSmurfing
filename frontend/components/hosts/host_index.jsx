import React from 'react';
import HostIndexItemContainer from './host_index_item_container';

class HostIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const hosts = this.props.hosts.map( host => (
      <HostIndexItemContainer
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
