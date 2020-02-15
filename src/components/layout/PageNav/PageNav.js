import React from 'react';
import {NavLink} from 'react-router-dom';
//import PropTypes from 'prop-types';
//import styles from './PageNav.scss';

class PageNav extends React.Component {

  render() {
    return (
      <nav>
        <NavLink exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active'>Home</NavLink>
        <NavLink to={`${process.env.PUBLIC_URL}/login`} activeClassName='active'>Login</NavLink>
        <NavLink to={`${process.env.PUBLIC_URL}/kitchen`} activeClassName='active'>Kitchen</NavLink>
        <NavLink to={`${process.env.PUBLIC_URL}/tables`} activeClassName='active'>Tables</NavLink>
        <NavLink to={`${process.env.PUBLIC_URL}/weiter`} activeClassName='active'>Weiter</NavLink>
      </nav>
    );
  }
}

export default PageNav;
