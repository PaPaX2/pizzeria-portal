import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tables.module.scss';

class EventId extends React.Component {

  render() {
    return (
      <div className={styles.component}>
        <p>Event Id: {this.props.match.params.id}</p>
      </div>
    );
  }
}

EventId.propTypes = {
  match: PropTypes.object,
};

export default EventId;
