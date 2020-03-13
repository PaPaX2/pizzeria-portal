import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
//import PropTypes from 'prop-types';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Homepage from './components/views/Homepage/Homepage';
import LoginPage from './components/views/Login/Login';
import Kitchen from './components/views/Kitchen/Kitchen';
import Tables from './components/views/Tables/Tables';
import Waiter from './components/views/Waiter/Waiter';
import NewOrder from './components/views/Waiter/NewOrder';
import OrderId from './components/views/Waiter/OrderId';
import BookingId from './components/views/Tables/BookingId';
import NewBooking from './components/views/Tables/NewBooking';
import EventId from './components/views/Tables/EventId';
import NewEvent from './components/views/Tables/NewEvent';
import { StylesProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { Provider } from 'react-redux';
import store from './redux/store';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#2B4C6F'},
    //secondary: { main: '#11cb5f', },
  },
});

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename={'/panel'}>
        <StylesProvider injectFirst>
          <ThemeProvider theme={theme}>
            <MainLayout>
              <Switch>
                <Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage} />
                <Route exact path={process.env.PUBLIC_URL + '/login'} component={LoginPage} />
                <Route exact path={`${process.env.PUBLIC_URL}/kitchen`} component={Kitchen} />
                <Route exact path={`${process.env.PUBLIC_URL}/tables`} component={Tables} />
                <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/:id`} component={BookingId} />
                <Route exact path={`${process.env.PUBLIC_URL}/table/booking/new`} component={NewBooking} />
                <Route exact path={`${process.env.PUBLIC_URL}/table/event/new`} component={NewEvent} />
                <Route exact path={`${process.env.PUBLIC_URL}/table/event/:id`} component={EventId} />
                <Route exact path={`${process.env.PUBLIC_URL}/waiter`} component={Waiter} />
                <Route exact path={`${process.env.PUBLIC_URL}/waiter/neworder`} component={NewOrder} />
                <Route exact path={`${process.env.PUBLIC_URL}/waiter/order/:id`} component={OrderId} />
              </Switch>
            </MainLayout>
          </ThemeProvider>
        </StylesProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
