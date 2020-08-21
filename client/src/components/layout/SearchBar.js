import React, { useContext } from 'react';
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
    <nav
      style={{ marginBottom: '20px', marginTop: '20px' }}
      className='amber accent-1'
    >
      <div className='nav-wrapper'>
        <form>
          <div className='input-field'>
            <input id='search' type='search' onChange={onChange} />
            <label className='label-icon' htmlFor='search'>
              <i className='material-icons grey-text'>search</i>
            </label>
            <i className='material-icons grey-text' onClick={onClear}>
              close
            </i>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default SearchBar;
