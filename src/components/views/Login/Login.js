import React from 'react';
import Card from '@material-ui/core/Card';

import styles from './Login.module.scss';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import {Link} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';

const LoginPage = () => (
  <Container className={styles.component}>
    <Paper>
      <h2> Login </h2>
    </Paper>
    <Card className={styles.loginArea} variant="outlined">
      <TextField
        id="login-input"
        label="Login"
        variant="filled"
      />
      <TextField
        id="password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        variant="filled"
      />
      <Button className={styles.button} component={ Link } to={`/`}>Login</Button>
    </Card>
  </Container>
);

export default LoginPage;
