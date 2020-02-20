import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tables.module.scss';
import {Link} from 'react-router-dom';

class Tables extends React.Component {

  state = {
    tableId: '123',
    eventId: '567',
  };


  render() {
    return (
      <div className={styles.component}>
        <h2>Tables view</h2>
        <ul>
          <li><Link to={'/tables/booking/' + this.state.tableId}>Manage Table Reservation</Link></li>
          <li><Link to={'/table/booking/new'}>New Table Reservation</Link></li>
          <li><Link to={'/table/event/' + this.state.eventId}>Manage Event Reservation</Link></li>
          <li><Link to={'/table/event/new'}>New Event Reservation</Link></li>
        </ul>
      </div>
    );
  }
}
Tables.propTypes = {
  tableId: PropTypes.string,
};

export default Tables;
