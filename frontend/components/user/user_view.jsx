import React from 'react';
import Header from '../general/header';
import UserCard from './user_card';
import CitiesIndexContainer from '../cities/cities_index_container';

class UserView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user,
      requests: props.requests,
      test: true
    };
    props.fetchRequests(props.user.id);
  }

  componentDidMount() {
    // console.log(this.props);
    this.setState({test: false});
  }



  render() {
    const requests = this.props.requests.map( (request, idx) => {
      return (
        <li key={idx} className='list-item'>
          <p>Host: {request.host_id}</p>
          <p>Start: {request.start_date}</p>
          <p>End: {request.end_date}</p>
        </li>
      );
    })
    // console.log(this.props);
    return (
      <div id="user-view" className="user-main-view">
        <Header user={this.state.user} />
        <div id='user-view-content' className='user-view-content main'>
          <div className='column mod-sidebar'>
            <div className='box'>
              <UserCard type='user-card' user={this.state.user}/>
            </div>

            <div className='box'>
              <header className='box-header'>
                <h3 className='box-header-title'>
                  My Requests
                </h3>
              </header>
              <div className='box-content mod-padded'>
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

export default UserView;
