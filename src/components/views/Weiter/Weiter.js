import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Weiter.module.scss';


class Weiter extends React.Component {

  state = {
    order: '123',
  };


  render(order) {
    return (
      <div className={styles.component}>
        <h2>Weiter view</h2>
        <Link to={`/weiter/neworder`} activeClassName='active'>new</Link>
        <Link to={`/weiter/order`} currentOrder={order}>order: id</Link>
        <p></p>
      </div>
    );
  }
}
Weiter.propTypes = {
  order: PropTypes.string,
};

export default Weiter;
