import React, { useContext, useState, useEffect } from 'react';
import RecipeContext from '../../context/recipe/recipeContext';

const SearchBar = () => {
  const recipeContext = useContext(RecipeContext);
  const { searchRecipes } = recipeContext;

  const [text, setText] = useState('');
  const [byTitle, setByTitle] = useState(true);
  const [byIngredients, setByIngredients] = useState(false);
  const [byPreparation, setByPreparation] = useState(false);

  useEffect(() => {
    searchRecipes(text, byTitle, byIngredients, byPreparation);
  }, [text, byTitle, byIngredients, byPreparation]);

  const onTextChange = (e) => {
    setText(e.target.value);
  };

  // const onClear = (e) => {
  //   clearSearch();
  //   document.getElementById('search').value = '';
  // };

  return (
    <div className='container'>
      <div className='card-panel yellow lighten-4'>
        <div className='row'>
          <div className='col s4 m4 l4'>
            <div className='switch center'>
              <span style={{ fontSize: '0.9em' }}>Titolo</span>
              <label>
                <input
                  type='checkbox'
                  defaultChecked={byTitle}
                  onChange={() => setByTitle(!byTitle)}
                />
                <span className='lever'></span>
              </label>
            </div>
          </div>
          <div className='col s4 m4 l4'>
            <div className='switch center'>
              <span style={{ fontSize: '0.9em' }}>Ingredienti</span>
              <label>
                <input
                  type='checkbox'
                  defaultChecked={byIngredients}
                  onChange={() => setByIngredients(!byIngredients)}
                />
                <span className='lever'></span>
              </label>
            </div>
          </div>
          <div className='col s4 m4 l4'>
            <div className='switch center'>
              <span style={{ fontSize: '0.9em' }}>Preparazione</span>
              <label>
                <input
                  type='checkbox'
                  defaultChecked={byPreparation}
                  onChange={() => setByPreparation(!byPreparation)}
                />
                <span className='lever'></span>
              </label>
            </div>
          </div>
        </div>
        <input
          id='search'
          type='search'
          onChange={onTextChange}
          defaultValue={text}
        />
      </div>
    </div>
  );
};

export default SearchBar;
