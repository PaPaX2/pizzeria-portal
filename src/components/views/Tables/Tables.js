
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tables.module.scss';
import {Link} from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Table from '@material-ui/core/Table';

const Tables = () => {

  let state = {
    tableId: '123',
    eventId: '567',
    tablesNo: 5,
    openHour: '10:00',
    closeHour: '24:00',
  };

  const tables = [];
  for (let i=1; i <= state.tablesNo; i++ ){
    tables.push(
      <TableRow  key={i}>
        <TableCell>
          Table no {i}
        </TableCell>
      </TableRow>
    );
  }

  return (
    <Container className={styles.component}>
      <Paper>
        <h2>Tables view</h2>
      </Paper>
      <Table>
        <TableHead>
          {tables}
        </TableHead>
      </Table>

      <ul>
        <li><Link to={'/tables/booking/' + state.tableId}>Manage Table Reservation</Link></li>
        <li><Link to={'/table/booking/new'}>New Table Reservation</Link></li>
        <li><Link to={'/table/event/' + state.eventId}>Manage Event Reservation</Link></li>
        <li><Link to={'/table/event/new'}>New Event Reservation</Link></li>
      </ul>
      <div className={styles.floorPlan}>
        <div className={`${styles.object} ${styles.entry}`}>entry</div>
        <div className={`${styles.object} ${styles.bar}`}>bar</div>
        <div className={`${styles.object} ${styles.table} ${styles.dataTable1}`}>table-1</div>
        <div className={`${styles.object} ${styles.table} ${styles.tableRound} ${styles.dataTable2}`}>table-2</div>
        <div className={`${styles.object} ${styles.table} ${styles.dataTable3}`}>table-3</div>
      </div>

    </Container>

  );
};

Tables.propTypes = {
  tableId: PropTypes.string,
};

export default Tables;
