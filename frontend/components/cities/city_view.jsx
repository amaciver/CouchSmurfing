import React from 'react';
import Header from '../general/header';


class CityView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user
    };
  }

  render() {
    return (
      <div id="user-view" className="user-main-view">
        <Header user={this.state.user} />
        <div id='city-view-content' className='city-view-content'>
          City View
        </div>
      </div>
    );
  }
}

export default CityView;
