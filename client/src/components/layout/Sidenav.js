import React, { useContext, Fragment } from 'react';
import AuthContext from '../../context/auth/authContext';
import RecipeContext from '../../context/recipe/recipeContext';

const Sidenav = () => {
  const authContext = useContext(AuthContext);
  const recipeContext = useContext(RecipeContext);

  const { logout, user } = authContext;
  const { clearRecipes } = recipeContext;

  const onLogout = () => {
    logout();
    clearRecipes(); // without this, the next user would see the previous user's recipes!
  };

  return (
    <ul id='slide-out' className='sidenav'>
      {user && (
        <Fragment>
          <li>
            <a href='#!'>
              <i className='material-icons'>user</i>
              {user.name}
            </a>
          </li>
          <li>
            <div className='divider'></div>
          </li>
          <li>
            <a
              href='#!'
              onClick={onLogout}
              title='Logout'
              className='sidenav-close'
            >
              <i className='material-icons'>logout</i>Esci
            </a>
          </li>
        </Fragment>
      )}
    </ul>
  );
};

export default Sidenav;
