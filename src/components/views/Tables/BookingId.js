import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tables.module.scss';

class BookingId extends React.Component {

  render() {
    return (
      <div className={styles.component}>
        <p>Booking Table Id: {this.props.match.params.id.substring(1)}</p>
      </div>
    );
  }
}

BookingId.propTypes = {
  match: PropTypes.object,
};

export default BookingId;
