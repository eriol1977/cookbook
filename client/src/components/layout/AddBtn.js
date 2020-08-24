import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import RecipeContext from '../../context/recipe/recipeContext';

const AddBtn = () => {
  const recipeContext = useContext(RecipeContext);
  const { clearCurrent } = recipeContext;

  const history = useHistory();

  const onAddRecipe = (e) => {
    clearCurrent();
    history.push('/recipe');
  };

  return (
    <div className='fixed-action-btn'>
      <a
        href='#!'
        onClick={onAddRecipe}
        className='btn-floating btn-large blue modal-trigger'
        title='Add Recipe'
      >
        <i className='large material-icons'>add</i>
      </a>
    </div>
  );
};

export default AddBtn;
