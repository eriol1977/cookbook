import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import CategoryGrid from '../../categories/CategoryGrid';

const RecipeWizardTitle = ({ title, onChange }) => {
  return (
    <Fragment>
      <h6>
        Inserisci un bel <strong>titolo</strong> per la tua ricetta:
      </h6>
      <div className='input-field'>
        <input type='text' name='title' value={title} onChange={onChange} />
      </div>
      <br />
      <br />
      <br />
      <h6>
        Scegli una <strong>categoria</strong>:{'           '}
      </h6>
      <CategoryGrid />
    </Fragment>
  );
};

RecipeWizardTitle.propTypes = {
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RecipeWizardTitle;
