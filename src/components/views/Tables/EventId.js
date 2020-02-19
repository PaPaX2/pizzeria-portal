import React from 'react';
//import PropTypes from 'prop-types';
import styles from './Tables.module.scss';

class EventId extends React.Component {

  render() {
    return (
      <div className={styles.component}>
        <p>Event Id: {window.location.pathname.split('/:').pop()}</p>
      </div>
    );
  }
}

export default EventId;
