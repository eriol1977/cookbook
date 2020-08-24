import React, { useState, useContext, useEffect } from 'react';
import RecipeContext from '../../context/recipe/recipeContext';
import M from 'materialize-css/dist/js/materialize.min.js';
import { Link } from 'react-router-dom';

const AddRecipe = (props) => {
  const recipeContext = useContext(RecipeContext);
  const { addRecipe, updateRecipe, deleteRecipe, current } = recipeContext;

  useEffect(() => {
    var elems = document.querySelectorAll('.fixed-action-btn');
    M.FloatingActionButton.init(elems, null);

    elems = document.querySelectorAll('.modal');
    M.Modal.init(elems, null);

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

  const onDelete = (e) => {
    e.preventDefault();
    deleteRecipe(recipe._id);
    M.toast({ html: `"${title}" deleted` });
    props.history.push('/');
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
    <div className='container'>
      <form onSubmit={onSubmit}>
        <h4>{current ? 'Edit Recipe' : 'Add Recipe'}</h4>

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
            onClick={onSubmit}
            className='btn-floating btn-large blue'
            title={current ? 'Update Recipe' : 'Add Recipe'}
          >
            <i className='large material-icons'>save</i>
          </a>
          <ul>
            <li>
              <Link
                to='/'
                className='btn-floating yellow'
                title='Back to recipe list'
              >
                <i className='material-icons'>arrow_back</i>
              </Link>
            </li>
            {current && (
              <li>
                <a
                  href='#deleteConfirmation'
                  className='btn-floating red modal-trigger'
                  title='Delete recipe'
                >
                  <i className='material-icons'>delete</i>
                </a>
              </li>
            )}
          </ul>
        </div>
      </form>

      {/* delete confirmation modal */}
      <div id='deleteConfirmation' className='modal'>
        <div className='modal-content'>
          <h4>Delete Recipe</h4>
          <p>
            You are about to delete <strong>"{title}"</strong>
          </p>
          <p>Are you sure?</p>
        </div>
        <div className='modal-footer'>
          <a
            href='#!'
            onClick={onDelete}
            className='modal-close green btn-flat left'
            style={{ marginLeft: '18px', marginBottom: '10px' }}
          >
            Yes, proceed
          </a>
          <a
            href='#!'
            className='modal-close red btn-flat right'
            style={{ marginRight: '18px', marginBottom: '10px' }}
          >
            No, I've changed my mind
          </a>
        </div>
      </div>
    </div>
  );
};

export default AddRecipe;
