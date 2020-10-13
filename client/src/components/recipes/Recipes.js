import React, { useContext, Fragment, useEffect } from 'react';
import RecipeContext from '../../context/recipe/recipeContext';
import CategoryContext from '../../context/category/categoryContext';
import Spinner from '../layout/Spinner';
import RecipesByCategory from './RecipesByCategory';

const Recipes = () => {
  const recipeContext = useContext(RecipeContext);

  const { recipes, getRecipes, loading, clearSearch } = recipeContext;

  const categoryContext = useContext(CategoryContext);
  const { categories, getCategories } = categoryContext;

  useEffect(() => {
    clearSearch();
    getRecipes();
    getCategories();
    //eslint-disable-next-line
  }, []);

  // // Splits the given array in groups of elements
  // const splitArrayInGroups = (original) => {
  //   const copy = Array.from(original);
  //   var groups = [];
  //   while (copy.length > 0) groups.push(copy.splice(0, 4));
  //   return groups;
  // };

  // if (recipes !== null && recipes.length === 0 && !loading) {
  //   return <h5>Qui vedrai le tue ricette! Prova ad aggiungerne una...</h5>;
  // }

  // the recipes (all of them, or just those filtered by the search bar)
  // are split in groups, then a row is created for each group;
  // each RecipeItem is a div with class col s6 m3 l3, so that rows
  // are displayed correctly in each screen size
  return (
    <Fragment>
      {recipes !== null && categories !== null && !loading ? (
        <Fragment>
          {categories.map((category) => (
            <RecipesByCategory category={category} key={category._id} />
          ))}
        </Fragment>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default Recipes;
