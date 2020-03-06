import React from 'react';
//import PropTypes from 'prop-types';
import styles from './Homepage.module.scss';
import Container from '@material-ui/core/Container';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const demoStatistics = [
  {id: '1', status: 'ordered', localValue: 5, localCash: 150, togoValue: 7, togoCash: 220},
  {id: '2', status: 'in progress', localValue: 4, localCash: 100, togoValue: 9, togoCash: 410},
  {id: '5', status: 'done', localValue: 200, localCash: 3500, togoValue: 70, togoCash: 520},
];

const demoEvents = [
  {name: 'xxx', phone: '123456789', hour: '12:00 - 14:00', table: 1 },
  {name: 'yyy', phone: '123456789', hour: '14:00 - 16:00', table: 2 },
  {name: 'zzz', phone: '123456789', hour: '15:00 - 17:00', table: 3 },
  {name: 'www', phone: '123456789', hour: '18:00 - 20:00', table: 4 },
  {name: 'vvv', phone: '123456789', hour: '19:00 - 21:00', table: 1 },
  {name: 'ddd', phone: '123456789', hour: '20:00 - 22:00', table: 2 },
  {name: 'rrr', phone: '123456789', hour: '22:00 - 24:00', table: 4 },
];

const today = new Date();
const formatedDate = (today.getDate() < 10 ? '0' : '') + today.getDate() + '.' + (((today.getMonth() + 1) < 10 ? '0' : '') + (today.getMonth() + 1)) + '.' + today.getFullYear();

const Homepage = () => (
  <Container className={styles.component}>
    <h2>Dashboard</h2>
    <Paper>
      <h4> Today Statistics </h4>
    </Paper>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell colSpan={1}></TableCell>
          <TableCell align="center" colSpan={2}> Local </TableCell>
          <TableCell align="center" colSpan={2}> To Go </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Orders</TableCell>
          <TableCell>number</TableCell>
          <TableCell>value</TableCell>
          <TableCell>number</TableCell>
          <TableCell>value</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {demoStatistics.map(row =>
          <TableRow key={row.status}>
            <TableCell>{row.status}</TableCell>
            <TableCell>{row.localValue}</TableCell>
            <TableCell>{row.localCash}$</TableCell>
            <TableCell>{row.togoValue}</TableCell>
            <TableCell>{row.togoCash}$</TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
    <Paper>
      <h4> Reservations and Events for: {formatedDate} </h4>
    </Paper>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell>Hour</TableCell>
          <TableCell>Table</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {demoEvents.map(row =>
          <TableRow key={row.name}>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.phone}</TableCell>
            <TableCell>{row.hour}</TableCell>
            <TableCell>{row.table}</TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>

  </Container>
);


export default Homepage;
