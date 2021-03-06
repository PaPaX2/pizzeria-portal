import React from 'react';
import PropTypes from 'prop-types';
import styles from './Waiter.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

class Waiter extends React.Component {
  static propTypes = {
    tables: PropTypes.object,
    fetchTables: PropTypes.func,
    setStatus: PropTypes.func,
    loading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOfType(PropTypes.bool, PropTypes.string),
    }),
  }

  componentDidMount(){
    const { fetchTables } = this.props;
    fetchTables();
  }

  renderActions(id, status){

    const {setStatus} = this.props;
    switch (status) {
      case 'free':
        return (
          <>
            <Button onClick={() => { setStatus({ id, status: 'thinking' }); }}>thinking</Button>
            <Button component={ Link } to={`/waiter/neworder`} onClick={() => { setStatus({ id, status: 'new order' }); }}>new order</Button>
          </>
        );
      case 'thinking':
        return (
          <>
            <Button onClick={() => { setStatus({ id, status: 'ordered' }); }}>Ordered</Button>
            <Button component={ Link } to={`/waiter/neworder`} onClick={() => { setStatus({ id, status: 'order' }); }}>new order</Button>
          </>
        );
      case 'ordered':
        return (
          <Button onClick={() => { setStatus({ id, status: 'delivered' }); }}>prepered</Button>
        );
      case 'prepared':
        return (
          <Button onClick={() => { setStatus({ id, status: 'paid' }); }}>delivered</Button>
        );
      case 'delivered':
        return (
          <Button onClick={() => { setStatus({ id, status: 'free' }); }}>paid</Button>
        );
      case 'paid':
        return (
          <Button onClick={() => { setStatus({ id, status: 'free' }); }}>free</Button>
        );
      default:
        return null;
    }
  }

  render() {
    const { loading: { active, error }, tables } = this.props;

    if(active || !tables.length){
      return (
        <Paper className={styles.component}>
          <p>Loading...</p>
        </Paper>
      );
    } else if(error) {
      return (
        <Paper className={styles.component}>
          <p>Error! Details:</p>
          <pre>{error}</pre>
        </Paper>
      );
    } else {
      return (
        <Paper className={styles.component}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Table</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Order</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tables.map(row => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell>
                    {row.status}
                  </TableCell>
                  <TableCell>
                    {row.order && (
                      <Button component={ Link } to={`/waiter/order/${row.order}`}>
                        {row.order}
                      </Button>
                    )}
                  </TableCell>
                  <TableCell>
                    {this.renderActions(row.id, row.status)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      );
    }
  }
}

export default Waiter;
