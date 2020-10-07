import React, { useReducer } from 'react';
import axios from 'axios';
import CategoryContext from './categoryContext';
import categoryReducer from './categoryReducer';

import {
  GET_CATEGORIES,
  GET_CATEGORY,
  CLEAR_CATEGORY,
  SET_LOADING,
} from '../types';

const CategoryState = (props) => {
  const initialState = {
    categories: null,
    recipeCategory: null,
    loading: false,
  };

  const [state, dispatch] = useReducer(categoryReducer, initialState);

  // Get Categories
  const getCategories = async () => {
    try {
      setLoading();
      const res = await axios.get('/api/categories');
      dispatch({
        type: GET_CATEGORIES,
        payload: res.data,
      });
    } catch (err) {
      // TODO
    }
  };

  // Get Recipe Category
  const getRecipeCategory = async (id) => {
    try {
      setLoading();
      const res = await axios.get(`/api/categories/${id}`);
      dispatch({
        type: GET_CATEGORY,
        payload: res.data,
      });
    } catch (err) {
      // TODO
    }
  };

  // Clear Recipe Category
  const clearRecipeCategory = () => {
    dispatch({ type: CLEAR_CATEGORY });
  };

  // Set loading to true
  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  return (
    <CategoryContext.Provider
      value={{
        categories: state.categories,
        recipeCategory: state.recipeCategory,
        loading: state.loading,
        getCategories,
        getRecipeCategory,
        clearRecipeCategory,
      }}
    >
      {props.children}
    </CategoryContext.Provider>
  );
};

export default CategoryState;
