import React, { useState, useContext, useEffect, Fragment } from 'react';
import RecipeContext from '../../../context/recipe/recipeContext';
import CategoryContext from '../../../context/category/categoryContext';
import M from 'materialize-css/dist/js/materialize.min.js';
import NavbarWizard from '../../layout/NavbarWizard';
import RecipeWizardTitle from './RecipeWizardTitle';
import RecipeWizardIngredients from './RecipeWizardIngredients';
import RecipeWizardPreparation from './RecipeWizardPreparation';

const RecipeWizard = (props) => {
  const recipeContext = useContext(RecipeContext);
  const { addRecipe, updateRecipe, current } = recipeContext;

  const categoryContext = useContext(CategoryContext);
  const {
    getRecipeCategory,
    clearRecipeCategory,
    recipeCategory,
  } = categoryContext;

  useEffect(() => {
    var elems = document.querySelectorAll('.fixed-action-btn');
    M.FloatingActionButton.init(elems, null);

    clearRecipeCategory();
    if (current !== null) {
      setRecipe(current);
      if (current.category) getRecipeCategory(current.category);
    } else {
      setRecipe({
        title: '',
        ingredients: '',
        preparation: '',
        category: null,
      });
    }
  }, [recipeContext, current]);

  useEffect(() => {
    setCategory(recipeCategory);
  }, [recipeCategory]);

  const [recipe, setRecipe] = useState({
    title: '',
    ingredients: '',
    preparation: '',
    category: null,
  });
  var [page, setPage] = useState(1);
  const [category, setCategory] = useState(null);

  const { title, ingredients, preparation } = recipe;

  const nextPage = () => {
    if (page < 3) setPage(++page);
  };

  const previousPage = () => {
    if (page > 1) setPage(--page);
  };

  const onChange = (e) =>
    setRecipe({ ...recipe, [e.target.name]: e.target.value }); // spread operator to take all the actual properties of recipe

  const onCategorySelected = (category) => {
    setCategory(category);
    setRecipe({ ...recipe, category: category._id });
  };

  const onSave = (e) => {
    e.preventDefault();
    if (validateForm()) {
      if (current === null) {
        addRecipe(recipe);
        M.toast({ html: `"${title}" aggiunta` });
      } else {
        updateRecipe(recipe);
        M.toast({ html: `"${title}" modificata` });
      }
      props.history.push('/');
    }
  };

  const validateForm = () => {
    let valid = true;
    if (title.trim() === '') {
      valid = false;
      M.toast({ html: 'Inserisci un titolo, per favore' });
    } else if (ingredients.trim() === '') {
      valid = false;
      M.toast({ html: 'Inserisci gli ingredienti, per favore' });
    } else if (preparation.trim() === '') {
      valid = false;
      M.toast({ html: 'Inserisci i dettagli della preparazione, per favore' });
    }
    return valid;
  };

  return (
    <Fragment>
      <NavbarWizard />
      <div className='container'>
        <h5>{current ? 'Modifica Ricetta' : 'Aggiungi Ricetta'}</h5>
        <br />

        <form>
          {page === 1 && (
            <RecipeWizardTitle
              title={title}
              onChange={onChange}
              onCategorySelected={onCategorySelected}
              selectedCategory={category}
            />
          )}

          {page === 2 && (
            <RecipeWizardIngredients
              ingredients={ingredients}
              onChange={onChange}
            />
          )}

          {page === 3 && (
            <RecipeWizardPreparation
              preparation={preparation}
              onChange={onChange}
            />
          )}

          {page > 1 && (
            <div
              className='fixed-action-btn'
              style={{ right: 'auto', left: '23px' }}
            >
              <a
                href='#!'
                className='btn-floating btn-large blue'
                onClick={previousPage}
                title='Pagina precedente'
              >
                <i className='material-icons'>keyboard_arrow_left</i>
              </a>
            </div>
          )}

          {page < 3 && (
            <div className='fixed-action-btn'>
              <a
                href='#!'
                className='btn-floating btn-large blue'
                onClick={nextPage}
                title='Pagina successiva'
              >
                <i className='material-icons'>keyboard_arrow_right</i>
              </a>
            </div>
          )}

          {page === 3 && (
            <div className='fixed-action-btn'>
              <a
                href='#!'
                onClick={onSave}
                className='btn-floating btn-large green'
                title={current ? 'Modifica Ricetta' : 'Aggiungi Ricetta'}
              >
                <i className='large material-icons'>save</i>
              </a>
            </div>
          )}
        </form>
      </div>
    </Fragment>
  );
};

export default RecipeWizard;
