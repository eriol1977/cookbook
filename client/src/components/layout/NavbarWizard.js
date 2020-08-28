import React, { useContext, Fragment, useEffect } from 'react';
import RecipeContext from '../../context/recipe/recipeContext';
import M from 'materialize-css/dist/js/materialize.min.js';
import { Link, useHistory } from 'react-router-dom';

const NavbarWizard = () => {
  const recipeContext = useContext(RecipeContext);
  const { deleteRecipe, current } = recipeContext;

  const history = useHistory();

  useEffect(() => {
    var elems = document.querySelectorAll('.modal');
    M.Modal.init(elems, null);
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
              <Link to='/' title='Torna alle ricette'>
                <i className='material-icons'>arrow_back</i>
              </Link>
            </li>
          </ul>
          <ul id='nav-mobile' className='right'>
            {current && (
              <li>
                <a
                  href='#deleteConfirmation'
                  title='Elimina ricetta'
                  className='modal-trigger'
                >
                  <i className='material-icons'>delete</i>
                </a>
              </li>
            )}
          </ul>
        </div>
      </nav>

      {/* delete confirmation modal */}
      {current && (
        <div id='deleteConfirmation' className='modal'>
          <div className='modal-content'>
            <h4>Elimina Ricetta</h4>
            <p>
              Stai per eliminare <strong>"{current.title}"</strong>
            </p>
            <p>Confermi?</p>
          </div>
          <div className='modal-footer'>
            <a
              href='#!'
              onClick={onDelete}
              className='modal-close red btn-flat'
              style={{ marginRight: '20px', marginBottom: '10px' }}
            >
              ELIMINA!
            </a>
            <a
              href='#!'
              className='modal-close btn-flat'
              style={{ marginRight: '20px', marginBottom: '10px' }}
            >
              Annulla
            </a>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default NavbarWizard;
