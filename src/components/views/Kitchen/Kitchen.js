import React from 'react';
//import PropTypes from 'prop-types';
import styles from './Kitchen.module.scss';


const demoContent = [
  {id: '1', status: 'free', order: null},
  {id: '2', status: 'thinking', order: null},
  {id: '3', status: 'ordered', order: 123},
  {id: '4', status: 'prepared', order: 234},
  {id: '5', status: 'delivered', order: 345},
  {id: '6', status: 'paid', order: 456},
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
