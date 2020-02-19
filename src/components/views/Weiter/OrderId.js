import React from 'react';
//import PropTypes from 'prop-types';
import styles from './Weiter.module.scss';

class OrderId extends React.Component {

  render() {
    return (
      <div className={styles.component}>
        <p>OrderId: {window.location.pathname.split('/:').pop()}</p>
      </div>
    );
  }
}

export default OrderId;
