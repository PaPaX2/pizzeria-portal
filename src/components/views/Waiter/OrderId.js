import React from 'react';
import PropTypes from 'prop-types';
import styles from './Waiter.module.scss';
import Paper from '@material-ui/core/Paper';

class OrderId extends React.Component {

  render() {
    return (
      <Paper className={styles.component}>
        <div className={styles.component}>
          <p>OrderId: {this.props.match.params.id}</p>
        </div>
      </Paper>
    );
  }
}

OrderId.propTypes = {
  match: PropTypes.object,
};

export default OrderId;
