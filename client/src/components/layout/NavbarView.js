import React, { Fragment, useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { Link, useHistory } from 'react-router-dom';
import Sidenav from './Sidenav';

const NavbarView = () => {
  const history = useHistory();

  useEffect(() => {
    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems, null);
    //eslint-disable-next-line
  }, []);

  const editRecipe = () => {
    history.push('/recipe');
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
            <li>
              <a href='#!' onClick={editRecipe} title='Edit recipe'>
                <i className='material-icons'>edit</i>
              </a>
            </li>
            <li>
              <Link to='/' title='Back to recipe list'>
                <i className='material-icons'>arrow_back</i>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <Sidenav />
    </Fragment>
  );
};

export default NavbarView;
