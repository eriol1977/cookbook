import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import RecipeContext from '../../context/recipe/recipeContext';
import CategoryGrid from '../categories/CategoryGrid';

const CategoryBar = ({onClose}) => {
  const recipeContext = useContext(RecipeContext);
  const { searchRecipes, clearSearch, filters } = recipeContext;

  const [category, setCategory] = useState(null);

  useEffect(() => {
    if(category !== null) {
      searchRecipes({
        ...filters,
        category: category._id
      });
    }
    //eslint-disable-next-line
  }, [category]);

  const onClear = (e) => {
    clearSearch();
  };

  return (
    <div className='container'>
      <div className='card-panel yellow lighten-4'>
        <a
          className='right'
          href='#!'
          onClick={onClose}
          title='Chiudi filtro'>
            <i className="material-icons left">close</i>
        </a>
        <CategoryGrid onSelected={(c) => setCategory(c)} />
        <div style={{height: '20px'}}>&nbsp;</div>
        <div className='center'>
          <a 
            className="waves-effect waves-light btn-small blue"
            href='#!'
            onClick={onClear}
            title='Resetta filtri'>
              <i className="material-icons left">refresh</i>Resetta Filtro
          </a>
        </div>
      </div>
    </div>
  );
};

CategoryBar.propTypes = {
  onClose: PropTypes.func.isRequired,
}

export default CategoryBar;
