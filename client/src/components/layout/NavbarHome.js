import React, { Fragment, useEffect, useState } from 'react';
import Sidenav from './Sidenav';
import M from 'materialize-css/dist/js/materialize.min.js';
import SearchBar from './SearchBar';

const Navbar = () => {
  useEffect(() => {
    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems, null);
    //eslint-disable-next-line
  }, []);

  const [searchBarVisible, setSearchBarVisible] = useState(false);

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
              <a
                href='#!'
                onClick={() => setSearchBarVisible(!searchBarVisible)}
              >
                <i
                  className='material-icons'
                  style={{
                    marginRight: '20px',
                    color: searchBarVisible ? '#ffff00' : 'white',
                  }}
                >
                  search
                </i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {searchBarVisible && <SearchBar />}

      <Sidenav />
    </Fragment>
  );
};

export default Navbar;
