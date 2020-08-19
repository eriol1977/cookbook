import React, { useContext, Fragment, useEffect } from 'react';
import RecipeContext from '../../context/recipe/recipeContext';
import RecipeItem from './RecipeItem';
import Spinner from '../layout/Spinner';

const Recipes = () => {
  const recipeContext = useContext(RecipeContext);

  const { recipes, getRecipes, loading } = recipeContext;

  useEffect(() => {
    getRecipes();
    //eslint-disable-next-line
  }, []);

  if (recipes !== null && recipes.length === 0 && !loading) {
    return <h5>Please add a recipe</h5>;
  }

  return (
    <Fragment>
      {recipes !== null && !loading ? (
        recipes.map((recipe) => <RecipeItem recipe={recipe} key={recipe._id} />)
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default Recipes;
