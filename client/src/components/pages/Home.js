import React, { useContext, useEffect, Fragment } from 'react';
import AuthContext from '../../context/auth/authContext';
import AddBtn from '../layout/AddBtn';
import AddRecipeModal from '../recipes/AddRecipeModal';
import Recipes from '../recipes/Recipes';

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    //eslint-disable-next-line
  }, []); // the square brackets means 'only when component loads'

  return (
    <Fragment>
      <AddBtn />
      <AddRecipeModal />
      <Recipes />
    </Fragment>
  );
};

export default Home;
