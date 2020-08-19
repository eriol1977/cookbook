import React from 'react';

const AddBtn = () => {
  return (
    <div className='fixed-action-btn'>
      <a
        href='#add-recipe-modal'
        className='btn-floating btn-large blue modal-trigger'
        title='Add Recipe'
      >
        <i className='large material-icons'>add</i>
      </a>
    </div>
  );
};

export default AddBtn;
