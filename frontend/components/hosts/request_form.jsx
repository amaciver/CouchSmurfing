import React from 'react';
import { DateRangePicker } from 'react-dates';
import Moment from 'moment';
import css from 'react-dates/lib/css/_datepicker.css';
import {START_DATE, END_DATE} from 'react-dates/constants';

class RequestForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Moment(),
      endDate: new Moment(),
      focused: START_DATE
    };
  }

  render() {

    return(
      <div className='request-form-wrapper'>
        <DateRangePicker

          startDate={this.state.startDate}
          endDate={this.state.endDate}
          focusedInput={this.state.focused}
          onDatesChange={({startDate, endDate}) => { this.setState({ startDate, endDate }); }}
          onFocusChange={( focused ) => { this.setState({ focused }); }}
          />

        </div>
    );
  }

}

export default RequestForm;
