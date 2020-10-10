import React, { useContext, useEffect, Fragment } from 'react';
import AuthContext from '../../context/auth/authContext';
import Recipes from '../recipes/Recipes';
import M from 'materialize-css/dist/js/materialize.min.js';
import NavbarHome from '../layout/NavbarHome';

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    var elems = document.querySelectorAll('.fixed-action-btn');
    M.FloatingActionButton.init(elems, null);

    authContext.loadUser();
    //eslint-disable-next-line
  }, []); // the square brackets means 'only when component loads'

  return (
    <Fragment>
      <NavbarHome />
      <div className='container'>
        <Recipes />
      </div>
    </Fragment>
  );
};

export default Home;
