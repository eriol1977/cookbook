import React, { useState, useContext, useEffect } from 'react';
import RecipeContext from '../../context/recipe/recipeContext';
import M from 'materialize-css/dist/js/materialize.min.js';
import BackHomeBtn from '../layout/BackHomeBtn';

const AddRecipe = (props) => {
  const recipeContext = useContext(RecipeContext);
  const { addRecipe, updateRecipe, current, clearCurrent } = recipeContext;

  useEffect(() => {
    if (current !== null) {
      setRecipe(current);
    } else {
      setRecipe({
        title: '',
        ingredients: '',
        preparation: '',
      });
    }
  }, [recipeContext, current]);

  const [recipe, setRecipe] = useState({
    title: '',
    ingredients: '',
    preparation: '',
  });

  const { title, ingredients, preparation } = recipe;

  const onChange = (e) =>
    setRecipe({ ...recipe, [e.target.name]: e.target.value }); // spread operator to take all the actual properties of recipe

  const onSubmit = (e) => {
    e.preventDefault();
    if (current === null) {
      addRecipe(recipe);
      M.toast({ html: `"${title}" added` });
    } else {
      updateRecipe(recipe);
      M.toast({ html: `"${title}" updated` });
    }
    clearCurrent();
    props.history.push('/');
  };

  return (
    <div className='container'>
      <form onSubmit={onSubmit}>
        <h4>{current ? 'Edit Recipe' : 'Add Recipe'}</h4>

        <div className='input-field'>
          <input
            type='text'
            name='title'
            value={title}
            onChange={onChange}
            required
          />
          <label htmlFor='title' className='active'>
            Title
          </label>
        </div>

        <div className='input-field'>
          <span>Ingredients</span>
          <textarea
            name='ingredients'
            value={ingredients}
            onChange={onChange}
            style={{ height: '5rem' }}
            required
          />
        </div>

        <div className='input-field'>
          <span>Preparation</span>
          <textarea
            name='preparation'
            value={preparation}
            onChange={onChange}
            style={{ height: '15rem' }}
            required
          />
        </div>

        <div>
          <input
            type='submit'
            value={current ? 'Update Recipe' : 'Add Recipe'}
            className='modal-close waves-effect blue waves-light btn'
          />
        </div>
      </form>
      <BackHomeBtn />
    </div>
  );
};

export default AddRecipe;
