import React from 'react';
import PropTypes from 'prop-types';

const RecipeItem = ({ recipe }) => {
  const { title } = recipe;

  return (
    <div className='col s12 m4 l4'>
      <div className='card small'>
        <div className='card-image'>
          <img src='cookbook.gif' alt='Recipe' />
        </div>
        {/* the following div, together with some rules in App.css, solves the problem of the halfway button being hidden in a card
        see: https://github.com/Dogfalo/materialize/issues/4218 */}
        <div className='card-fab'>
          <a
            href='#!'
            className='btn-floating halfway-fab waves-effect waves-light blue'
          >
            <i className='material-icons'>edit</i>
          </a>
        </div>
        <div className='card-content'>
          <span className='card-title'>{title}</span>
        </div>
      </div>
    </div>
  );
};

RecipeItem.propTypes = {
  recipe: PropTypes.object.isRequired,
};

export default RecipeItem;
