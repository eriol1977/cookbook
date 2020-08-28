import React, { Fragment } from 'react';
import { Link, useHistory } from 'react-router-dom';

const NavbarView = () => {
  const history = useHistory();

  const editRecipe = () => {
    history.push('/recipe');
  };

  return (
    <Fragment>
      <nav className='blue' style={{ marginBottom: '20px' }}>
        <div className='nav-wrapper'>
          <ul id='nav-mobile' className='left'>
            <li>
              <Link to='/' title='Back to recipe list'>
                <i className='material-icons'>arrow_back</i>
              </Link>
            </li>
          </ul>
          <ul id='nav-mobile' className='right'>
            <li>
              <a href='#!' onClick={editRecipe} title='Edit recipe'>
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
