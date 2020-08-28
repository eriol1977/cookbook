import React, { useContext, Fragment, useEffect } from 'react';
import RecipeContext from '../../context/recipe/recipeContext';
import M from 'materialize-css/dist/js/materialize.min.js';
import { Link, useHistory } from 'react-router-dom';
import Sidenav from './Sidenav';

const NavbarForm = () => {
  const recipeContext = useContext(RecipeContext);
  const { deleteRecipe, current } = recipeContext;

  const history = useHistory();

  useEffect(() => {
    var elems = document.querySelectorAll('.modal');
    M.Modal.init(elems, null);

    elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems, null);
    //eslint-disable-next-line
  }, []);

  const onDelete = (e) => {
    e.preventDefault();
    deleteRecipe(current._id);
    M.toast({ html: `"${current.title}" deleted` });
    history.push('/');
  };

  return (
    <Fragment>
      <nav className='blue' style={{ marginBottom: '20px' }}>
        <div className='nav-wrapper'>
          <ul id='nav-mobile' className='left'>
            <li>
              <a
                href='#!'
                className='sidenav-trigger show-on-large'
                data-target='slide-out'
              >
                <i className='material-icons'>menu</i>
              </a>
            </li>
          </ul>
          <ul id='nav-mobile' className='right'>
            {current && (
              <li>
                <a
                  href='#deleteConfirmation'
                  title='Delete recipe'
                  className='modal-trigger'
                >
                  <i className='material-icons'>delete</i>
                </a>
              </li>
            )}
            <li>
              <Link to='/' title='Back to recipe list'>
                <i className='material-icons'>arrow_back</i>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <Sidenav />

      {/* delete confirmation modal */}
      {current && (
        <div id='deleteConfirmation' className='modal'>
          <div className='modal-content'>
            <h4>Delete Recipe</h4>
            <p>
              You are about to delete <strong>"{current.title}"</strong>
            </p>
            <p>Are you sure?</p>
          </div>
          <div className='modal-footer'>
            <a
              href='#!'
              onClick={onDelete}
              className='modal-close red btn-flat'
              style={{ marginRight: '20px', marginBottom: '10px' }}
            >
              DO IT!
            </a>
            <a
              href='#!'
              className='modal-close btn-flat'
              style={{ marginRight: '20px', marginBottom: '10px' }}
            >
              Cancel
            </a>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default NavbarForm;
