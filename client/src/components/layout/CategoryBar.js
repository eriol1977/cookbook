import React, { useContext, useState, useEffect } from 'react';
import RecipeContext from '../../context/recipe/recipeContext';
import CategoryGrid from '../categories/CategoryGrid';

const CategoryBar = () => {
  const recipeContext = useContext(RecipeContext);
  const { searchRecipesByCategory, clearSearch } = recipeContext;

  const [category, setCategory] = useState(null);

  useEffect(() => {
    if(category !== null)
      searchRecipesByCategory(category._id);
    //eslint-disable-next-line
  }, [category]);

  const onClear = (e) => {
    clearSearch();
  };

  return (
    <div className='container'>
      <div className='card-panel yellow lighten-4'>
        <CategoryGrid onSelected={(c) => setCategory(c)} />
        <div style={{height: '20px'}}>&nbsp;</div>
        <div className='center'>
          <a 
            className="waves-effect waves-light btn-small blue"
            href='#!'
            onClick={onClear}
            title='Resetta filtri'>
              <i className="material-icons left">close</i>Resetta Filtro
          </a>
        </div>
      </div>
    </div>
  );
};

export default CategoryBar;
