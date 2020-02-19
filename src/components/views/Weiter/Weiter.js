import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Weiter.module.scss';


class Weiter extends React.Component {

  state = {
    orderId: '123',
  };

  render() {
    return (
      <div className={styles.component}>
        <h2>Weiter view</h2>
        <ul>
          <li><Link to={`/weiter/neworder`}>new</Link></li>
          <li><Link to={`/weiter/order/:` + this.state.orderId}>Check order</Link></li>
        </ul>
      </div>
    );
  }
}
Weiter.propTypes = {
  orderId: PropTypes.string,
};

export default Weiter;
