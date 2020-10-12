import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import RecipeContext from '../../context/recipe/recipeContext';

const RecipeItem = ({ recipe }) => {
  const recipeContext = useContext(RecipeContext);
  const { setCurrent } = recipeContext;

  const history = useHistory();

  const { title } = recipe;

  const viewRecipe = () => {
    setCurrent(recipe);
    history.push('/recipeView');
  };

  return (
    <div className='col s6 m3 l3'>
      <div
        className='card small'
        onClick={viewRecipe}
        style={{ cursor: 'pointer' }}
      >
        <div className='card-image'>
          {recipe.mainImage ? (
            <img src={recipe.mainImage} alt='Ricetta' />
          ) : (
            <img src='cookbook.gif' alt='Ricetta' />
          )}
        </div>

        <div className='card-content center'>
          <span>
            <strong>{title}</strong>
          </span>
        </div>
      </div>
    </div>
  );
};

RecipeItem.propTypes = {
  recipe: PropTypes.object.isRequired,
};

export default RecipeItem;
