import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import RecipeContext from '../../context/recipe/recipeContext';

const RecipeItem = ({ recipe, color }) => {
  const recipeContext = useContext(RecipeContext);
  const { setCurrent } = recipeContext;

  const history = useHistory();

  const { title } = recipe;

  const viewRecipe = () => {
    setCurrent(recipe);
    history.push('/recipeView');
  };

  return (
    <li
      onClick={viewRecipe}
      style={{
        cursor: 'pointer',
        backgroundColor: color,
        padding: '5px 5px 5px 20px',
        marginBottom: '5px'
      }}
    >
      {title}
    </li>
  );
};

RecipeItem.propTypes = {
  recipe: PropTypes.object.isRequired,
  color: PropTypes.string.isRequired,
};

export default RecipeItem;
