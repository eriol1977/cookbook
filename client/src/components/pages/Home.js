import React, { useContext, useEffect, Fragment } from 'react';
import AuthContext from '../../context/auth/authContext';
import AddBtn from '../layout/AddBtn';
import AddRecipeModal from '../recipes/AddRecipeModal';
import Recipes from '../recipes/Recipes';
import M from 'materialize-css/dist/js/materialize.min.js';

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    var elems = document.querySelectorAll('.modal');
    M.Modal.init(elems, null);

    elems = document.querySelectorAll('.fixed-action-btn');
    M.FloatingActionButton.init(elems, null);

    elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems, null);

    authContext.loadUser();
    //eslint-disable-next-line
  }, []); // the square brackets means 'only when component loads'

  return (
    <div className='container'>
      <AddBtn />
      <AddRecipeModal />
      <Recipes />
    </div>
  );
};

export default Home;
