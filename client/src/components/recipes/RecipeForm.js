import React, { useState, useContext, useEffect, Fragment } from 'react';
import RecipeContext from '../../context/recipe/recipeContext';
import M from 'materialize-css/dist/js/materialize.min.js';
import NavbarForm from '../layout/NavbarForm';

const RecipeForm = (props) => {
  const recipeContext = useContext(RecipeContext);
  const { addRecipe, updateRecipe, current } = recipeContext;

  useEffect(() => {
    var elems = document.querySelectorAll('.fixed-action-btn');
    M.FloatingActionButton.init(elems, null);

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

  const onSave = (e) => {
    e.preventDefault();
    if (validateForm()) {
      if (current === null) {
        addRecipe(recipe);
        M.toast({ html: `"${title}" added` });
      } else {
        updateRecipe(recipe);
        M.toast({ html: `"${title}" updated` });
      }
      props.history.push('/');
    }
  };

  const validateForm = () => {
    let valid = true;
    if (title.trim() === '') {
      valid = false;
      M.toast({ html: 'Please enter a title' });
    } else if (ingredients.trim() === '') {
      valid = false;
      M.toast({ html: 'Please enter the ingredients' });
    } else if (preparation.trim() === '') {
      valid = false;
      M.toast({ html: 'Please enter the preparation details' });
    }
    return valid;
  };

  return (
    <Fragment>
      <NavbarForm />
      <div className='container'>
        <h5>{current ? 'Edit Recipe' : 'Add Recipe'}</h5>
        <br />

        <form>
          <div className='input-field'>
            <input type='text' name='title' value={title} onChange={onChange} />
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
            />
          </div>

          <div className='input-field'>
            <span>Preparation</span>
            <textarea
              name='preparation'
              value={preparation}
              onChange={onChange}
              style={{ height: '15rem' }}
            />
          </div>

          <div className='fixed-action-btn'>
            <a
              href='#!'
              onClick={onSave}
              className='btn-floating btn-large blue'
              title={current ? 'Update Recipe' : 'Add Recipe'}
            >
              <i className='large material-icons'>save</i>
            </a>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default RecipeForm;
