import React from 'react';
//import PropTypes from 'prop-types';
import styles from './Kitchen.module.scss';
import Container from '@material-ui/core/Container';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const demoContent = [
  {id: '1', time: '10:15:25', order: 123, table: 1, ordered: 'pizza, pasta, soup', status: 'done'},
  {id: '2', time: '11:25:35', order: 234, table: 5, ordered: 'soup', status: 'in progress'},
  {id: '3', time: '12:35:45', order: 345, table: 3, ordered: 'pasta,', status: 'in progress'},
  {id: '4', time: '13:45:55', order: 456, table: 4, ordered: 'pizza, soup', status: 'in progress'},
  {id: '4', time: '14:45:55', order: 456, table: '', ordered: 'pizza', status: 'in progress'},
];


const Kitchen = () => (

  /*
const [state, setState] = React.useState({
  checkedA: true,
  checkedB: true,
});

const handleChange = name => event => {
  setState({ ...state, [name]: event.target.checked });
};
*/

  <Container className={styles.component}>
    <Paper>
      <h4> Kitchen </h4>
    </Paper>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Order ID</TableCell>
          <TableCell> Hour </TableCell>
          <TableCell>Table</TableCell>
          <TableCell> Order </TableCell>
          <TableCell>Status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {demoContent.map(row =>
          <TableRow key={row.time}>
            <TableCell>{row.order}</TableCell>
            <TableCell>{row.time}</TableCell>
            <TableCell>{row.table === '' ? 'to go' : row.table}</TableCell>
            <TableCell>{row.ordered}</TableCell>
            <TableCell>
              <Typography component="div">
                <Grid component="label" container alignItems="center" spacing={1}>
                  <Grid item>In Progress</Grid>
                  <Grid item>
                    <Switch
                      checked={row.status !== 'done' ? false : true}
                      onChange={console.log('click')}
                      value={row.status}
                    />
                  </Grid>
                  <Grid item>Done</Grid>
                </Grid>
              </Typography>
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  </Container>
);

export default Kitchen;
