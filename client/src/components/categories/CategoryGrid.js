import React, { Fragment, useEffect, useContext } from 'react';
import CategoryContext from '../../context/category/categoryContext';
import CategoryItem from './CategoryItem';
import Spinner from '../layout/Spinner';
import M from 'materialize-css/dist/js/materialize.min.js';
import PropTypes from 'prop-types';

const CategoryGrid = ({ onSelected }) => {
  const categoryContext = useContext(CategoryContext);
  const {
    categories,
    getCategories,
    loading,
    recipeCategory,
  } = categoryContext;

  useEffect(() => {
    getCategories();
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    var elems = document.querySelectorAll('.carousel');
    let carousel = M.Carousel.init(elems, null)[0];
    if (categories && recipeCategory) {
      const index = categories.map((c) => c._id).indexOf(recipeCategory._id);
      carousel.set(index);
    }
  }, [categories, recipeCategory]);

  return (
    <Fragment>
      {categories !== null && !loading ? (
        <div className='carousel' style={{height: '250px'}}>
          {categories.map((category) => (
            <CategoryItem
              category={category}
              key={category._id}
              onSelected={onSelected}
            />
          ))}
        </div>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

CategoryGrid.propTypes = {
  onSelected: PropTypes.func.isRequired,
};

export default CategoryGrid;
