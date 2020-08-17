import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Register from './components/auth/Register';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import Login from './components/auth/Login';
import Alerts from './components/layout/Alerts';
import setAuthToken from './utils/setAuthToken';
import PrivateRoute from './components/routing/PrivateRoute';
import Navbar from './components/layout/Navbar';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    // Init Materialize javascript (modals, etc: it's like calling init for every kind of component, but without options)
    M.AutoInit();
  });

  return (
    <AuthState>
      <AlertState>
        <Router>
          <Fragment>
            <Alerts />
            <Navbar />
            <Switch>
              <PrivateRoute exact path='/' component={Home} />
              <PrivateRoute exact path='/about' component={About} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />
            </Switch>
          </Fragment>
        </Router>
      </AlertState>
    </AuthState>
  );
};

export default App;
