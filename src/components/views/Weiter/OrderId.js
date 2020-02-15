import React from 'react';
import PropTypes from 'prop-types';
import styles from './Weiter.module.scss';

class OrderId extends React.Component {

  render() {
    return (
      <div className={styles.component}>
        <h4>OrderId</h4>
        <p>OrderId: {this.props.currentOrder}</p>
      </div>
    );
  }
}

OrderId.propTypes = {
  currentOrder: PropTypes.string,
};

export default OrderId;
