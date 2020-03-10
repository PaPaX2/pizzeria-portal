import React from 'react';
//import PropTypes from 'prop-types';
import styles from './Waiter.module.scss';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const demoMenu = [
  {id: '1', status: 'free', order: null},
  {id: '2', status: 'thinking', order: null},
  {id: '3', status: 'ordered', order: 123},
  {id: '4', status: 'prepared', order: 234},
  {id: '5', status: 'delivered', order: 345},
  {id: '6', status: 'paid', order: 456},
];

class NewOrder extends React.Component {

  render() {
    return (
      <Container>
        <Paper>
          <h4>Waiter / NewOrder</h4>
        </Paper>
        <Card>
          <CardContent>
            <h5>Table: </h5>
            <FormControl required className={styles.formControl}>
              <InputLabel id="Table">Chose a table:</InputLabel>
              <Select
                labelId="tableNo"
                id="table"
                value={this.table}
                onChange={this.handleChange}
                className={styles.selectEmpty}
              >
                <MenuItem value={1}>table 1</MenuItem>
                <MenuItem value={2}>table 2</MenuItem>
                <MenuItem value={3}>table 3</MenuItem>
                <MenuItem value={4}>table 4</MenuItem>
                <MenuItem value={5}>table 5</MenuItem>
                <MenuItem value={6}>table 6</MenuItem>
              </Select>
              <FormHelperText>Required</FormHelperText>
            </FormControl>
          </CardContent>
        </Card>
      </Container>
    );
  }
}

export default NewOrder;
