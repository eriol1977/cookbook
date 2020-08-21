import {
  ADD_RECIPE,
  RECIPES_ERROR,
  SET_LOADING,
  GET_RECIPES,
  SEARCH_RECIPES,
  CLEAR_SEARCH,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: action.payload,
        loading: false,
      };
    case ADD_RECIPE:
      return {
        ...state,
        recipes: [...state.recipes, action.payload],
        loading: false,
      };
    case SEARCH_RECIPES:
      return {
        ...state,
        filtered: state.recipes.filter((recipe) => {
          const regex = new RegExp(`${action.payload}`, 'gi'); // search for the text, global, case insensitive
          return recipe.title.match(regex); // searches by title
        }),
      };
    case CLEAR_SEARCH:
      return {
        ...state,
        filtered: null,
      };
    case RECIPES_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
        loading: false,
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
