import React from 'react';
import { Link } from 'react-router-dom';

const BackHomeBtn = () => {
  return (
    <div className='fixed-action-btn'>
      <Link
        to='/'
        className='btn-floating btn-large blue modal-trigger'
        title='Home'
      >
        <i className='large material-icons'>home</i>
      </Link>
    </div>
  );
};

export default BackHomeBtn;
