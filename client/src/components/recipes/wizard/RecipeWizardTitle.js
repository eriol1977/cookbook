import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import CategoryGrid from '../../categories/CategoryGrid';

const RecipeWizardTitle = ({
  title,
  onChange,
  onCategorySelected,
  selectedCategory,
}) => {
  return (
    <Fragment>
      <h6>
        Inserisci un bel <strong>titolo</strong> per la tua ricetta:
      </h6>
      <div className='input-field'>
        <input type='text' name='title' value={title} onChange={onChange} />
      </div>
      <br />
      <h6>
        Scegli una <strong>categoria</strong>:{' '}
        {selectedCategory && selectedCategory.name}
      </h6>
      <CategoryGrid onSelected={onCategorySelected} />
    </Fragment>
  );
};

RecipeWizardTitle.propTypes = {
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onCategorySelected: PropTypes.func.isRequired,
  selectedCategory: PropTypes.object,
};

export default RecipeWizardTitle;
