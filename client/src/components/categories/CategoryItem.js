import React from 'react';
import PropTypes from 'prop-types';

const CategoryItem = ({ category }) => {
  return <div>{category.name}</div>;
};

CategoryItem.propTypes = {
  category: PropTypes.object.isRequired,
};

export default CategoryItem;
