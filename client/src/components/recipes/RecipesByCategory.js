import React, { useContext, Fragment } from 'react';
import RecipeContext from '../../context/recipe/recipeContext';
import PropTypes from 'prop-types';
import RecipeItem from './RecipeItem';

const RecipesByCategory = ({ category }) => {
  const recipeContext = useContext(RecipeContext);
  const { filtered, recipes } = recipeContext;

  const { _id, name, image } = category;

  // the following code block is duplicated for the cases of filtered recipes/all recipes;
  // it shows the category card if there is at least one recipe in the category, otherwise it returns an empty string
  return (
    <Fragment>
      {filtered === null ? (
        recipes !== null &&
        recipes.filter((r) => r.category === _id).length > 0 ? (
          <div className='card-panel' style={{ minHeight: '120px' }}>
            <strong>{name}</strong>
            <img
              src={image}
              alt='category'
              title={name}
              style={{ width: '80px' }}
              className='right'
            />
            <ul>
              {filtered !== null
                ? filtered
                    .filter((r) => r.category === _id)
                    .sort((a, b) =>
                      a.title > b.title ? 1 : b.title > a.title ? -1 : 0
                    )
                    .map((recipe, index) => (
                      <RecipeItem
                        recipe={recipe}
                        color={index % 2 === 0 ? '#fff9c4' : '#dcedc8'}
                        key={recipe._id}
                      />
                    ))
                : recipes
                    .filter((r) => r.category === _id)
                    .sort((a, b) =>
                      a.title > b.title ? 1 : b.title > a.title ? -1 : 0
                    )
                    .map((recipe, index) => (
                      <RecipeItem
                        recipe={recipe}
                        color={index % 2 === 0 ? '#fff9c4' : '#dcedc8'}
                        key={recipe._id}
                      />
                    ))}
            </ul>
          </div>
        ) : (
          ''
        )
      ) : filtered.filter((r) => r.category === _id).length > 0 ? (
        <div className='card-panel' style={{ minHeight: '120px' }}>
          <strong>{name}</strong>
          <img
            src={image}
            alt='category'
            title={name}
            style={{ width: '80px' }}
            className='right'
          />
          <ul>
            {filtered !== null
              ? filtered
                  .filter((r) => r.category === _id)
                  .sort((a, b) =>
                    a.title > b.title ? 1 : b.title > a.title ? -1 : 0
                  )
                  .map((recipe, index) => (
                    <RecipeItem
                      recipe={recipe}
                      color={index % 2 === 0 ? '#fff9c4' : '#dcedc8'}
                      key={recipe._id}
                    />
                  ))
              : recipes
                  .filter((r) => r.category === _id)
                  .sort((a, b) =>
                    a.title > b.title ? 1 : b.title > a.title ? -1 : 0
                  )
                  .map((recipe, index) => (
                    <RecipeItem
                      recipe={recipe}
                      color={index % 2 === 0 ? '#fff9c4' : '#dcedc8'}
                      key={recipe._id}
                    />
                  ))}
          </ul>
        </div>
      ) : (
        ''
      )}
    </Fragment>
  );
};

RecipesByCategory.propTypes = {
  category: PropTypes.object.isRequired,
};

export default RecipesByCategory;
