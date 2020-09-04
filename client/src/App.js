import React, { Fragment } from 'react';
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
import RecipeState from './context/recipe/RecipeState';
import RecipeWizard from './components/recipes/wizard/RecipeWizard';
import RecipeView from './components/recipes/RecipeView';
import CategoryState from './context/category/CategoryState';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <RecipeState>
        <CategoryState>
          <AlertState>
            <Router>
              <Fragment>
                <Alerts />
                <Switch>
                  <PrivateRoute exact path='/' component={Home} />
                  <PrivateRoute exact path='/about' component={About} />
                  <PrivateRoute exact path='/recipe' component={RecipeWizard} />
                  <PrivateRoute
                    exact
                    path='/recipeView'
                    component={RecipeView}
                  />
                  <Route exact path='/register' component={Register} />
                  <Route exact path='/login' component={Login} />
                </Switch>
              </Fragment>
            </Router>
          </AlertState>
        </CategoryState>
      </RecipeState>
    </AuthState>
  );
};

export default App;
