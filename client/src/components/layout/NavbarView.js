import React, { Fragment, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import RecipeContext from '../../context/recipe/recipeContext';

const NavbarView = () => {
  const recipeContext = useContext(RecipeContext);
  const { updateRecipe, current } = recipeContext;

  const history = useHistory();

  const editRecipe = () => {
    history.push('/recipe');
  };

  const bookmarkRecipe = (bookmark) => {
    let recipe = current;
    recipe.bookmarked = bookmark;
    updateRecipe(recipe);
  }

  return (
    <Fragment>
      <nav className='blue' style={{ marginBottom: '20px' }}>
        <div className='nav-wrapper'>
          <ul id='nav-mobile' className='left'>
            <li>
              <Link to='/' title='Torna alle ricette'>
                <i className='material-icons'>arrow_back</i>
              </Link>
            </li>
          </ul>
          <ul id='nav-mobile' className='right'>
            {current.bookmarked ? (
            <li>
              <a href='#!' onClick={() => bookmarkRecipe(false)} title='Rimuovi dalle ricette preferite'>
                <i className='material-icons'>bookmark</i>
              </a>
            </li>) : (<li>
              <a href='#!' onClick={() => bookmarkRecipe(true)} title='Aggiungi alle ricette preferite'>
                <i className='material-icons'>bookmark_border</i>
              </a>
            </li>)}
            <li>
              <a href='#!' onClick={editRecipe} title='Modifica ricetta'>
                <i className='material-icons'>edit</i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};

export default NavbarView;
