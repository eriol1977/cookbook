import React, { useContext, Fragment, useEffect, useState } from 'react';
import RecipeContext from '../../context/recipe/recipeContext';
import NavbarView from '../layout/NavbarView';

const RecipeView = () => {
  const recipeContext = useContext(RecipeContext);
  const { current } = recipeContext;

  useEffect(() => {
    setRecipe(current);
  }, [recipeContext, current]);

  const [recipe, setRecipe] = useState({
    title: '',
    ingredients: '',
    preparation: '',
  });

  const { title, ingredients, preparation } = recipe;

  return (
    <Fragment>
      <NavbarView />
      <div className='container'>
        <h5>{title}</h5>
        <br />

        <h6>Ingredients</h6>
        <div>{ingredients}</div>
        <br />

        <h6>Preparation</h6>
        <div>{preparation}</div>
      </div>
    </Fragment>
  );
};

export default RecipeView;
