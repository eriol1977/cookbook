import {
  ADD_RECIPE,
  RECIPES_ERROR,
  SET_LOADING,
  GET_RECIPES,
  SEARCH_RECIPES,
  CLEAR_SEARCH,
  CLEAR_RECIPES,
  CLEAR_CURRENT,
  SET_CURRENT,
  UPDATE_RECIPE,
  DELETE_RECIPE,
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
    case UPDATE_RECIPE:
      return {
        ...state,
        recipes: state.recipes.map((recipe) =>
          recipe._id === action.payload._id ? action.payload : recipe
        ), // the list is mapped to another list which has the updated element instead of the old (when the id is the same), or the element itself in case of different id
        current: null,
      };
    case DELETE_RECIPE:
      return {
        ...state,
        recipes: state.recipes.filter(
          (recipe) => recipe._id !== action.payload
        ),
        current: null,
        loading: false,
      };
    case SEARCH_RECIPES:
      return {
        ...state,
        filtered: state.recipes.filter((recipe) => {
          const regex = new RegExp(`${action.payload.text}`, 'gi'); // search for the text, global, case insensitive
          return (
            (action.payload.byTitle && recipe.title.match(regex)) ||
            (action.payload.byIngredients && recipe.ingredients.match(regex)) ||
            (action.payload.byPreparation && recipe.preparation.match(regex))
          );
        }),
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
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
    case CLEAR_RECIPES:
      return {
        ...state,
        recipes: null,
        filtered: null,
        error: null,
        current: null,
      };
    default:
      return state;
  }
};
