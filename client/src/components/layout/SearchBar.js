import React, { useContext, Fragment } from 'react';
import RecipeContext from '../../context/recipe/recipeContext';

const SearchBar = () => {
  const recipeContext = useContext(RecipeContext);
  const { searchRecipes, clearSearch } = recipeContext;

  const onChange = (e) => {
    searchRecipes(e.target.value);
  };

  const onClear = (e) => {
    clearSearch();
    document.getElementById('search').value = '';
  };

  return (
    <Fragment>
      <li>
        <input
          id='search'
          type='search'
          onChange={onChange}
          className='white-text'
          style={{ marginLeft: '10px', width: '50vw' }}
        />
      </li>
      <li>
        <a href='#!' onClick={onClear}>
          <i className='material-icons'>close</i>
        </a>
      </li>
    </Fragment>
  );
};

export default SearchBar;
