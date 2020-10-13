import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import RecipeContext from '../../context/recipe/recipeContext';

const SearchBar = ({onClose}) => {
  const recipeContext = useContext(RecipeContext);
  const { searchRecipes, clearSearch } = recipeContext;

  const [text, setText] = useState('');
  const [byTitle, setByTitle] = useState(true);
  const [byIngredients, setByIngredients] = useState(false);
  const [byPreparation, setByPreparation] = useState(false);

  useEffect(() => {
    searchRecipes(text, byTitle, byIngredients, byPreparation);
    //eslint-disable-next-line
  }, [text, byTitle, byIngredients, byPreparation]);

  const onTextChange = (e) => {
    setText(e.target.value);
  };

  const onClear = (e) => {
    clearSearch();
    document.getElementById('search').value = '';
    document.getElementById('byTitle').checked = true;
    document.getElementById('byIngredients').checked = false;
    document.getElementById('byPreparation').checked = false;
  };

  return (
    <div className='container'>
      <div className='card-panel yellow lighten-4'>
        <div className='row'>
          <div className='col s3 m3 l3'>
            <div className='switch center'>
              <span style={{ fontSize: '0.9em' }}>Titolo</span><br/>
              <label>
                <input
                  id='byTitle'
                  type='checkbox'
                  defaultChecked={byTitle}
                  onChange={() => setByTitle(!byTitle)}
                />
                <span className='lever'></span>
              </label>
            </div>
          </div>
          <div className='col s3 m3 l3'>
            <div className='switch center'>
              <span style={{ fontSize: '0.9em' }}>Ingredienti</span><br/>
              <label>
                <input
                  id='byIngredients'
                  type='checkbox'
                  defaultChecked={byIngredients}
                  onChange={() => setByIngredients(!byIngredients)}
                />
                <span className='lever'></span>
              </label>
            </div>
          </div>
          <div className='col s3 m3 l3'>
            <div className='switch center'>
              <span style={{ fontSize: '0.9em' }}>Preparazione</span><br/>
              <label>
                <input
                  id='byPreparation'
                  type='checkbox'
                  defaultChecked={byPreparation}
                  onChange={() => setByPreparation(!byPreparation)}
                />
                <span className='lever'></span>
              </label>
            </div>
          </div>
          <div className='col s3 m3 l3'>
          <a
            className='right'
            href='#!'
            onClick={onClose}
            title='Chiudi filtro'>
              <i className="material-icons left">close</i>
          </a>
          </div>
        </div>
        <input
          id='search'
          type='search'
          onChange={onTextChange}
          defaultValue={text}
          placeholder='Scrivi qui i termini da ricercare...'
        />
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

SearchBar.propTypes = {
  onClose: PropTypes.func.isRequired,
}

export default SearchBar;
