import React from 'react';
//import PropTypes from 'prop-types';
import styles from './Kitchen.module.scss';


const demoContent = [
  {id: '1', time: '10:15:25', order: 123, table: 1, ordered: 'pizza, pasta, soup', status: 'done'},
  {id: '2', time: '11:25:35', order: 234, table: 5, ordered: 'soup', status: 'in progress'},
  {id: '3', time: '12:35:45', order: 345, table: 3, ordered: 'pasta,', status: 'in progress'},
  {id: '4', time: '13:45:55', order: 456, table: 4, ordered: 'pizza, soup', status: 'in progress'},
];


class Kitchen extends React.Component {


  render() {
    return (
      <div className={styles.component}>
        <h2>Kitchen view</h2>
      </div>
    );
  }
}

export default Kitchen;
