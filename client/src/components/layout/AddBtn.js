import React from 'react';
import { Link } from 'react-router-dom';

const AddBtn = () => {
  return (
    <div className='fixed-action-btn'>
      <Link
        to='/recipe'
        className='btn-floating btn-large blue modal-trigger'
        title='Add Recipe'
      >
        <i className='large material-icons'>add</i>
      </Link>
    </div>
  );
};

export default AddBtn;
