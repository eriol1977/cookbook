import React, { useReducer } from 'react';
import axios from 'axios';
import RecipeContext from './recipeContext';
import recipeReducer from './recipeReducer';

import {
  ADD_RECIPE,
  RECIPES_ERROR,
  SET_LOADING,
  GET_RECIPES,
  SEARCH_RECIPES,
  CLEAR_SEARCH,
  CLEAR_RECIPES,
} from '../types';

const RecipeState = (props) => {
  const initialState = {
    recipes: null,
    filtered: null,
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
      dispatch({ type: RECIPES_ERROR, payload: err.response.statusText });
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
      dispatch({ type: RECIPES_ERROR, payload: err.response.statusText });
    }
  };

  // Search Recipes
  const searchRecipes = (text) => {
    dispatch({ type: SEARCH_RECIPES, payload: text });
  };

  // Clear Search
  const clearSearch = () => {
    dispatch({ type: CLEAR_SEARCH });
  };

  // Clear Recipes
  const clearRecipes = () => {
    dispatch({ type: CLEAR_RECIPES });
  };

  // Set loading to true
  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  return (
    <RecipeContext.Provider
      value={{
        recipes: state.recipes,
        filtered: state.filtered,
        current: state.current,
        loading: state.loading,
        error: state.error,
        getRecipes,
        addRecipe,
        searchRecipes,
        clearSearch,
        setLoading,
        clearRecipes,
      }}
    >
      {props.children}
    </RecipeContext.Provider>
  );
};

export default RecipeState;
