import React from 'react';
import PropTypes from 'prop-types';
import styles from './Waiter.module.scss';

class OrderId extends React.Component {

  render() {
    return (
      <div className={styles.component}>
        <p>OrderId: {this.props.match.params.id.substring(1)}</p>
      </div>
    );
  }
}

OrderId.propTypes = {
  match: PropTypes.object,
};

export default OrderId;
