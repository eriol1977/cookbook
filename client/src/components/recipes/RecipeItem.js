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
    <div className='col s12 m4 l4'>
      <div
        className='card small'
        onClick={viewRecipe}
        style={{ cursor: 'pointer' }}
      >
        <div className='card-image'>
          <img src='cookbook.gif' alt='Recipe' />
        </div>

        <div className='card-content'>
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
