import React, { Fragment, useEffect } from 'react';
import SearchBar from './SearchBar';
import Sidenav from './Sidenav';
import M from 'materialize-css/dist/js/materialize.min.js';

const Navbar = () => {
  useEffect(() => {
    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems, null);
    //eslint-disable-next-line
  }, []);

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
            <li>
              <i className='material-icons'>search</i>
            </li>
            <SearchBar />
          </ul>
        </div>
      </nav>

      <Sidenav />
    </Fragment>
  );
};

export default Navbar;
