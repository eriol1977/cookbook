import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import RecipeContext from '../../context/recipe/recipeContext';

const RecipeItem = ({ recipe }) => {
  const recipeContext = useContext(RecipeContext);
  const { _id, title, ingredients, preparation } = recipe;

  return (
    <div className='col s12 m4 l4'>
      <h5>{title}</h5>
      <span>
        <strong>Ingredients:</strong>
      </span>
      <p>{ingredients}</p>
      <span>
        <strong>Preparation:</strong>
      </span>
      <p>{preparation}</p>
      <hr />
    </div>
  );
};

RecipeItem.propTypes = {
  recipe: PropTypes.object.isRequired,
};

export default RecipeItem;
