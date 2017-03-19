import React from 'react';
import { DateRangePicker } from 'react-dates';
import Moment from 'moment';
import css from 'react-dates/lib/css/_datepicker.css';
import {START_DATE, END_DATE} from 'react-dates/constants';

class RequestForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      focused: null,
      body: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateBody = this.updateBody.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const request = {
      user_id: this.props.user.id,
      host_id: this.props.host.id,
      start_date: this.state.startDate._d,
      end_date: this.state.endDate._d
    }
    debugger;
    this.props.createRequest(request);
    // console.log(request);
  }

  updateBody(e) {
    this.setState({body: e.currentTarget.value})
  }

  render() {
    const placeholder = `Introduce yourself to ${this.props.host.name} with a nice note describing why you'd like to stay`
    return(
      <div className='request-form-wrapper'>
        <div className="box-header">
          <h1 className='box-header-title'>Request to stay with {this.props.host.name}</h1>
        </div>
        <div className="box-content">
          <form onSubmit={this.handleSubmit}>
            <div className='form-content'>
              <DateRangePicker

                startDate={this.state.startDate}
                endDate={this.state.endDate}
                focusedInput={this.state.focused}
                onDatesChange={({startDate, endDate}) => { this.setState({ startDate, endDate }); }}
                onFocusChange={( focused ) => { this.setState({ focused }); }}
                />

              <fieldset>
                <label className='is-required'>Message</label>
                <textarea onChange={this.updateBody} placeholder={placeholder} height='158px'></textarea>
              </fieldset>
            </div>
            <div className='form-actions'>
              <button className="request-button" type='submit'>Submit</button>
            </div>

          </form>

        </div>

      </div>
    );
  }

}

export default RequestForm;
