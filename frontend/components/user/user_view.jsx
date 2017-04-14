import React from 'react';
import Header from '../general/header';
import UserCard from './user_card';
import CitiesIndexContainer from '../cities/cities_index_container';

import {withRouter, hashHistory} from 'react-router';

class UserView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user,
      requests: props.requests
    };
    props.fetchRequests(props.user.id);
    this.handleRequestClick = this.handleRequestClick.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0,0);
  }

  handleRequestClick(id) {
    return () => {
      hashHistory.push(`/hosts/${id}`)
    };
  }



  render() {
    const requests = this.props.requests.map( (request, idx) => {

      const start = new Date(request.start_date).toDateString();
      const end = new Date(request.end_date).toDateString();
      return (
        <li key={idx} className='host-list-item' onClick={this.handleRequestClick(request.host.id)}>
          <div className='request-item-title'>
            <div className='host-image-wrapper mod-on-left'>
              <img className='host-item-image'  src={request.host.image_url} />
            </div>
            <div>

              <h3>{request.host.name}</h3>
              <div>{request.host.location}</div>
            </div>
          </div>

          <div>Start: {start}</div>
          <div>End: {end}</div>
        </li>
      );
    })
    // console.log(this.props);
    return (
      <div id="user-view" className="user-main-view">
        <Header user={this.state.user} />
        <div id='user-view-content' className='user-view-content main'>
          <div className='column mod-sidebar'>
            <UserCard type='user-card' user={this.state.user}/>


            <div className='box'>
              <header className='box-header'>
                <h3 className='box-header-title'>
                  My Requests
                </h3>
              </header>
              <div className='requests-box box-content'>
                <ul>
                  {requests}
                </ul>
              </div>
            </div>
          </div>

          <div className='column mod-main'>
            <CitiesIndexContainer type='user-view' />
          </div>

        </div>
      </div>
    );
  }
}

export default withRouter(UserView);
