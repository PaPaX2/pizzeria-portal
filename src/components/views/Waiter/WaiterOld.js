import React, { useState } from 'react';
import styles from './Waiter.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import Container from '@material-ui/core/Container';

const demoContent = [
  {id: '1', status: 'free', order: null},
  {id: '2', status: 'thinking', order: null},
  {id: '3', status: 'ordered', order: 123},
  {id: '4', status: 'prepared', order: 234},
  {id: '5', status: 'delivered', order: 345},
  {id: '6', status: 'paid', order: 456},
];

const status = ['free', 'thinking', 'ordered', 'prepared', 'delivered', 'paid'];

const changeStatus = param => {
  for (let row of demoContent) {
    if (param.value === row.status) {
      let index = demoContent.indexOf(row);
      console.log('index',  status.length, index, status, row.status, param.value);

      if (index >= status.length -1){
        index = 0;
      }
      else index = index + 1;

      console.log('przekazywany status', status[index]);
      return status[index];
    }
    //else return 'sorry, error';
    //console.log('index', index);
  }
};


//const [value, setValue] = useState(state);

const RenderActions = status => {

  const [value, setValue] = useState('free');

  switch (status) {
    case 'free':
      return (
        <>
          <Button onClick={() => setValue(changeStatus({value})) }>{value}</Button>
          <Button component={ Link } to={`/waiter/neworder`}>new order</Button>
        </>
      );
    case 'thinking':
      return (
        <Button component={ Link } to={`/waiter/neworder`}>new order</Button>
      );
    case 'ordered':
      return (
        <Button>prepared</Button>
      );
    case 'prepared':
      return (
        <Button>delivered</Button>
      );
    case 'delivered':
      return (
        <Button>paid</Button>
      );
    case 'paid':
      return (
        <Button>free</Button>
      );
    default:
      return null;
  }
};

const Waiter = () => (
  <Container>
    <Paper>
      <h2>Waiter view</h2>
    </Paper>
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
          {demoContent.map(row => (
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
                {RenderActions(row.status)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  </Container>
);

export default Waiter;
