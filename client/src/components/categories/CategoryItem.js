import React from 'react';
import PropTypes from 'prop-types';

const CategoryItem = ({ category, onSelected }) => {
  const itemClicked = (e) => {
    onSelected(category);
  };

  return (
    <div className='carousel-item' onClick={itemClicked}>
      <p className='center'>
        <strong>{category.name}</strong>
      </p>
      <img src={category.image} alt='Category' />
    </div>
  );
};

CategoryItem.propTypes = {
  category: PropTypes.object.isRequired,
  onSelected: PropTypes.func.isRequired,
};

export default CategoryItem;
