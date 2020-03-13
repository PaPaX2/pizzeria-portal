import React from 'react';
import PropTypes from 'prop-types';
import styles from './Waiter.module.scss';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';

class OrderId extends React.Component {

  render() {
    return (
      <Container>
        <Paper className={styles.component}>
          <h4>Waiter / Order ID</h4>
          <p>OrderId: {this.props.match.params.id}</p>
        </Paper>
        <Paper><h4>Menu</h4></Paper>
        <Paper><h4>Menu Opions</h4></Paper>
        <Paper><h4>Order Summary</h4></Paper>
        <Paper><h4>Cash total</h4></Paper>
      </Container>
    );
  }
}

OrderId.propTypes = {
  match: PropTypes.object,
};

export default OrderId;
