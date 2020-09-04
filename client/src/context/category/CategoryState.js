import React, { useReducer } from 'react';
import axios from 'axios';
import CategoryContext from './categoryContext';
import categoryReducer from './categoryReducer';

import { GET_CATEGORIES, SET_LOADING } from '../types';

const CategoryState = (props) => {
  const initialState = {
    categories: null,
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

  // Set loading to true
  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  return (
    <CategoryContext.Provider
      value={{
        categories: state.categories,
        loading: state.loading,
        getCategories,
      }}
    >
      {props.children}
    </CategoryContext.Provider>
  );
};

export default CategoryState;
