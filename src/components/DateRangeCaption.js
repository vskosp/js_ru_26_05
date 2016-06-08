import React, {PropTypes} from 'react';
import moment from 'moment';

export function DateRangeCaption({from, to}) {
  if (!from && !to) {
    return <p>Please select the <strong>first day</strong>.</p>
  }

  if (from && !to) {
    return <p>Please select the <strong>last day</strong>.</p>
  }

  if (from && to) {
    return <p>Selected date range: <strong>{moment(from).format('L')}</strong> - <strong>{moment(to).format('L')}</strong></p>
  }

  return null;
}

DateRangeCaption.propTypes = {
  from: PropTypes.instanceOf(Date),
  to: PropTypes.instanceOf(Date)
};