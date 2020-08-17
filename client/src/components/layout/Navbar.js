import React, { useContext, Fragment } from 'react';
import AuthContext from '../../context/auth/authContext';

const Navbar = () => {
  const authContext = useContext(AuthContext);

  const { logout, isAuthenticated, user } = authContext;

  const onLogout = () => {
    logout();
  };

  return (
    <nav className='blue'>
      <div className='nav-wrapper'>
        <a href='#!' className='brand-logo' style={{ marginLeft: '10px' }}>
          <i className='material-icons'>cake</i>CookBook
        </a>
        {isAuthenticated && (
          <Fragment>
            <ul id='nav-mobile' className='right'>
              <li>
                <a href='#!' onClick={onLogout} title='Logout'>
                  <i className='material-icons'>logout</i>
                </a>
              </li>
            </ul>
            <ul id='nav-mobile' className='right hide-on-med-and-down'>
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
  );
};

export default Navbar;
