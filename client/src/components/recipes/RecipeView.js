import React, { useContext, Fragment, useEffect, useState } from 'react';
import RecipeContext from '../../context/recipe/recipeContext';
import CategoryContext from '../../context/category/categoryContext';
import NavbarView from '../layout/NavbarView';

const RecipeView = () => {
  const recipeContext = useContext(RecipeContext);
  const { current } = recipeContext;

  const categoryContext = useContext(CategoryContext);
  const {
    getRecipeCategory,
    clearRecipeCategory,
    recipeCategory,
  } = categoryContext;

  useEffect(() => {
    clearRecipeCategory();
    setRecipe(current);
    if (current.category) getRecipeCategory(current.category);
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

        {recipeCategory && (
          <Fragment>
            <h6>Categoria: {recipeCategory.name}</h6>
            <br />
            <img
              src={recipeCategory.image}
              alt='category'
              style={{ width: '100px' }}
            />
          </Fragment>
        )}
        <br />
        <br />

        <h6>Ingredienti</h6>
        <div>{ingredients}</div>
        <br />

        <h6>Preparazione</h6>
        <div>{preparation}</div>
      </div>
    </Fragment>
  );
};

export default RecipeView;
