import React, { useContext, Fragment } from 'react';
import AuthContext from '../../context/auth/authContext';

const Navbar = () => {
  const authContext = useContext(AuthContext);

  const { logout, isAuthenticated, user } = authContext;

  const onLogout = () => {
    logout();
  };

  return (
    <Fragment>
      <nav className='blue'>
        <div className='nav-wrapper'>
          {isAuthenticated ? (
            <a
              href='#!'
              className='brand-logo sidenav-trigger show-on-large'
              style={{ marginLeft: '10px' }}
              data-target='slide-out'
            >
              <i className='material-icons'>menu</i>CookBook
            </a>
          ) : (
            <a href='#!' className='brand-logo' style={{ marginLeft: '10px' }}>
              CookBook
            </a>
          )}

          {isAuthenticated && (
            <Fragment>
              <ul
                id='nav-mobile'
                className='right hide-on-med-and-down'
                style={{ marginRight: '10px' }}
              >
                <li>
                  <i style={{ fontSize: '10pt' }}>
                    Hi {user && user.name.split(' ')[0]}, ready to cook?
                  </i>
                </li>
              </ul>
            </Fragment>
          )}
        </div>
      </nav>
      <ul id='slide-out' className='sidenav'>
        {user && (
          <Fragment>
            <li>
              <a href='#!'>
                <i className='material-icons'>user</i>
                {user.name}
              </a>
            </li>
            <li>
              <div className='divider'></div>
            </li>
            <li>
              <a
                href='#!'
                onClick={onLogout}
                title='Logout'
                className='sidenav-close'
              >
                <i className='material-icons'>logout</i>Logout
              </a>
            </li>
          </Fragment>
        )}
      </ul>
    </Fragment>
  );
};

export default Navbar;
