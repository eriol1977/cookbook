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
    //eslint-disable-next-line
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
        <table cellSpacing='0' cellPadding='0' style={{borderCollapse: 'unset'}}><tbody><tr>
        <td><h5>{title}</h5></td>
        <td>
        {recipeCategory && (
            <img
              src={recipeCategory.image}
              alt='category'
              title={recipeCategory.name}
              style={{ width: '100px' }}
              className='right'
            />
        )}
        </td>
        </tr></tbody></table>

        <strong>Ingredienti</strong>
        <div className='card-panel yellow lighten-4'>
          <div style={{whiteSpace: 'pre-wrap'}}>{ingredients}</div>
        </div>
        <br />

        <strong>Preparazione</strong>
        <div className='card-panel green lighten-4'>
          <div style={{whiteSpace: 'pre-wrap'}}>{preparation}</div>
        </div>
      </div>
    </Fragment>
  );
};

export default RecipeView;
