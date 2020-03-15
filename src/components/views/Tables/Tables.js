
import 'date-fns';
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
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Button from '@material-ui/core/Button';


const Tables = () => {

  let state = {
    tablesNo: 3,
    openHour: '10:00',
    closeHour: '24:00',
  };

  const demoReservations = [
    {id: '1', time: '10:00', order: 123, table: 1},
    {id: '2', time: '11:00', order: 234, table: 2},
    {id: '3', time: '12:30', order: 345, table: 3},
    {id: '4', time: '13:30', order: 456, table: 1},
    {id: '5', time: '20:00', order: 457, table: 3},
    {id: '6', time: '17:30', order: 4444, table: 'event'},
    {id: '7', time: '22:00', order: 5555, table: 'event'},
  ];

  //Create Table Head cells
  const tables = [];
  for (let i=1; i <= state.tablesNo; i++ ){
    tables.push(
      <TableCell key={i}>
        TABLE-{i}
      </TableCell>
    );
  }

  //Functions for Date and Time

  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const addManageButton = (id) => {
    return <Button className={styles.button} component={ Link } to={id}>Manage reservation</Button>;
  };

  return (
    <Container className={styles.component}>
      <Paper>
        <h2>Tables view</h2>
      </Paper>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container alignItems="center" direction="column">
          <KeyboardTimePicker
            margin="normal"
            id="time-picker"
            ampm={false}
            label="Reservation Time"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change time',
            }}
          />
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            label="Reservation Date"
            format="dd/MM/yyyy"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </Grid>
      </MuiPickersUtilsProvider>
      <Grid container direction="column" alignItems="center">
        <Button className={styles.button} component={ Link } to={`/tables/booking/new`}>Book a table</Button>
        <Button className={styles.button} component={ Link } to={`/tables/event/new`}>Add new event</Button>
      </Grid>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Hour/Table</TableCell>
            {tables}
            <TableCell>Events</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoReservations.map(row =>
            <TableRow key={row.time}>
              <TableCell>{row.time}</TableCell>
              <TableCell>{row.table === 1 ?
                addManageButton(`tables/booking/`+ row.order) : null
              }
              </TableCell>
              <TableCell>
                {row.table === 2 ?
                  addManageButton(`tables/booking/`+ row.order) : null
                }
              </TableCell>
              <TableCell>
                {row.table === 3 ?
                  addManageButton(`/tables/booking/`+ row.order) : null
                }
              </TableCell>
              <TableCell>
                {row.table === 'event' ?
                  addManageButton(`/tables/event/`+ row.order) : null
                }
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

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
