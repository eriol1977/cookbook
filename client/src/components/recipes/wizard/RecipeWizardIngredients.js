import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const RecipeWizardIngredients = ({ ingredients, onChange }) => {
  return (
    <Fragment>
      <h6>
        ...now the <strong>ingredients</strong>...
      </h6>
      <div className='input-field'>
        <textarea
          name='ingredients'
          value={ingredients}
          onChange={onChange}
          style={{ height: '55vh' }}
        />
      </div>
    </Fragment>
  );
};

RecipeWizardIngredients.propTypes = {
  ingredients: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RecipeWizardIngredients;
