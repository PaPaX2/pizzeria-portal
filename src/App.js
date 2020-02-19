import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
//import PropTypes from 'prop-types';

import MainLayout from './components/layout/MainLayout/MainLayout';

import Homepage from './components/views/Homepage/Homepage';
import Login from './components/views/Login/Login';
import Kitchen from './components/views/Kitchen/Kitchen';
import Tables from './components/views/Tables/Tables';
import Weiter from './components/views/Weiter/Weiter';

import PageNav from './components/layout/PageNav/PageNav';
import NewOrder from './components/views/Weiter/NewOrder';
import OrderId from './components/views/Weiter/OrderId';
import BookingId from './components/views/Tables/BookingId';
import NewBooking from './components/views/Tables/NewBooking';
import EventId from './components/views/Tables/EventId';
import NewEvent from './components/views/Tables/NewEvent';


function App() {
  return (
    <BrowserRouter basename={'/panel'}>
      <MainLayout>
        <PageNav />
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage} />
          <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
          <Route exact path={`${process.env.PUBLIC_URL}/kitchen`} component={Kitchen} />
          <Route exact path={`${process.env.PUBLIC_URL}/tables`} component={Tables} />
          <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/:id`} component={BookingId} />
          <Route exact path={`${process.env.PUBLIC_URL}/table/booking/new`} component={NewBooking} />
          <Route exact path={`${process.env.PUBLIC_URL}/table/event/new`} component={NewEvent} />
          <Route exact path={`${process.env.PUBLIC_URL}/table/event/:id`} component={EventId} />
          <Route exact path={`${process.env.PUBLIC_URL}/weiter`} component={Weiter} />
          <Route exact path={`${process.env.PUBLIC_URL}/weiter/neworder`} component={NewOrder} />
          <Route exact path={`${process.env.PUBLIC_URL}/weiter/order/:id`} component={OrderId} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
