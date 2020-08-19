import React, { useReducer } from 'react';
import axios from 'axios';
import RecipeContext from './recipeContext';
import recipeReducer from './recipeReducer';

import { ADD_RECIPE, RECIPES_ERROR, SET_LOADING, GET_RECIPES } from '../types';

const RecipeState = (props) => {
  const initialState = {
    recipes: null,
    current: null,
    loading: false,
    error: null,
  };

  const [state, dispatch] = useReducer(recipeReducer, initialState);

  // Get Recipes
  const getRecipes = async () => {
    try {
      setLoading();
      const res = await axios.get('/api/recipes');
      dispatch({
        type: GET_RECIPES,
        payload: res.data,
      });
    } catch (err) {
      dispatch({ type: RECIPES_ERROR, payload: err.response.data.msg });
    }
  };

  // Add Recipe
  const addRecipe = async (recipe) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      setLoading();
      const res = await axios.post('/api/recipes', recipe, config);
      dispatch({ type: ADD_RECIPE, payload: res.data });
    } catch (err) {
      dispatch({ type: RECIPES_ERROR, payload: err.response.data.msg });
    }
  };

  // Set loading to true
  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  return (
    <RecipeContext.Provider
      value={{
        recipes: state.recipes,
        current: state.current,
        loading: state.loading,
        error: state.error,
        getRecipes,
        addRecipe,
        setLoading,
      }}
    >
      {props.children}
    </RecipeContext.Provider>
  );
};

export default RecipeState;
