import React, {Component, PropTypes} from 'react';
import DayPicker, {DateUtils} from 'react-day-picker';
import 'react-day-picker/lib/style.css';

export class DateRangePicker extends Component {
  static propTypes = {
    from: PropTypes.instanceOf(Date),
    to: PropTypes.instanceOf(Date),
    onRangeSelect: PropTypes.func
  };

  render() {
    return (
      <DayPicker
        numberOfMonths={2}
        selectedDays={this.getSelectedDays}
        onDayClick={this.onDayClick}
      />
    );
  }

  getSelectedDays = (day) => {
    const {from, to} = this.props;
    return DateUtils.isDayInRange(day, {from, to});
  };

  onDayClick = (e, day) => {
    const {from, to, onRangeSelect} = this.props;
    const range = DateUtils.addDayToRange(day, {from, to});
    onRangeSelect(range);
  };

}