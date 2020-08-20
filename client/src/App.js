import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
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
import RecipeState from './context/recipe/RecipeState';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <RecipeState>
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
      </RecipeState>
    </AuthState>
  );
};

export default App;
