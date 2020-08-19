import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import RecipeContext from '../../context/recipe/recipeContext';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddRecipeModal = (props) => {
  const recipeContext = useContext(RecipeContext);
  const { addRecipe } = recipeContext;

  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [preparation, setPreparation] = useState('');

  const onSubmit = () => {
    if (title === '' || ingredients === '' || preparation === '') {
      M.toast({ html: 'Please enter all the mandatory fields' });
    } else {
      const newRecipe = {
        title,
        ingredients,
        preparation,
      };
      addRecipe(newRecipe);
      M.toast({ html: `"${title}" added` });

      // Clear Fields
      setTitle('');
      setIngredients('');
      setPreparation('');
    }
  };

  return (
    <div
      id='add-recipe-modal'
      className='modal'
      style={{ maxHeight: '100%', overflow: 'visible' }}
    >
      <div className='modal-content'>
        <h4>New Recipe</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor='title' className='active'>
              Title
            </label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <span>Ingredients</span>
            <textarea
              name='ingredients'
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              style={{ height: '5rem' }}
            />
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <span>Preparation</span>
            <textarea
              name='preparation'
              value={preparation}
              onChange={(e) => setPreparation(e.target.value)}
              style={{ height: '15rem' }}
            />
          </div>
        </div>
      </div>

      <div className='modal-footer'>
        <a
          href='#!'
          onClick={onSubmit}
          className='modal-close waves-effect blue waves-light btn'
        >
          Add Recipe
        </a>
      </div>
    </div>
  );
};

AddRecipeModal.propTypes = {};

export default AddRecipeModal;
