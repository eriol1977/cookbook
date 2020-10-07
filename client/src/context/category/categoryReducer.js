import {
  GET_CATEGORIES,
  GET_CATEGORY,
  CLEAR_CATEGORY,
  SET_LOADING,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
        loading: false,
      };
    case GET_CATEGORY:
      return {
        ...state,
        recipeCategory: action.payload,
        loading: false,
      };
    case CLEAR_CATEGORY:
      return {
        ...state,
        recipeCategory: null,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
