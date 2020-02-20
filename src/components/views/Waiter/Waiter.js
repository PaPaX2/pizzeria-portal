import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Waiter.module.scss';


class Waiter extends React.Component {

  state = {
    orderId: '123',
  };

  render() {
    return (
      <div className={styles.component}>
        <h2>Waiter view</h2>
        <ul>
          <li><Link to={`/waiter/neworder`}>new</Link></li>
          <li><Link to={`/waiter/order/` + this.state.orderId}>Check order</Link></li>
        </ul>
      </div>
    );
  }
}
Waiter.propTypes = {
  orderId: PropTypes.string,
};

export default Waiter;
