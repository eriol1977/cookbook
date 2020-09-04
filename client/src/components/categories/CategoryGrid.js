import React, { Fragment, useEffect, useContext } from 'react';
import CategoryContext from '../../context/category/categoryContext';
import CategoryItem from './CategoryItem';
import Spinner from '../layout/Spinner';

const CategoryGrid = () => {
  const categoryContext = useContext(CategoryContext);
  const { categories, getCategories, loading } = categoryContext;

  useEffect(() => {
    getCategories();
    //eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      {categories !== null && !loading ? (
        <Fragment>
          {categories.map((category) => (
            <CategoryItem category={category} key={category._id} />
          ))}
        </Fragment>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default CategoryGrid;
