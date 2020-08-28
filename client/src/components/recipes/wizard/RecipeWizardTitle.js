import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const RecipeWizardTitle = ({ title, onChange }) => {
  return (
    <Fragment>
      <h6>
        Insert a nice <strong>title</strong> for your recipe...
      </h6>
      <div className='input-field'>
        <input type='text' name='title' value={title} onChange={onChange} />
      </div>
    </Fragment>
  );
};

RecipeWizardTitle.propTypes = {
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RecipeWizardTitle;
