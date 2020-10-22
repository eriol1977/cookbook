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

const filterRecipes = (recipes, filters) => {
  if (recipes) {
    let temp = [...recipes];
    if (filters.category !== null) {
      temp = recipes.filter((recipe) => recipe.category === filters.category);
    }
    if (filters.bookmarked) {
      temp = temp.filter((recipe) => recipe.bookmarked === true);
    }
    if (filters.text !== null) {
      temp = temp.filter((recipe) => {
        const regex = new RegExp(`${filters.text}`, 'gi'); // search for the text, global, case insensitive
        return (
          (filters.byTitle && recipe.title.match(regex)) ||
          (filters.byIngredients && recipe.ingredients.match(regex)) ||
          (filters.byPreparation && recipe.preparation.match(regex))
        );
      });
    }
    return temp;
  }
  return null;
};

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
        filters: action.payload,
        filtered: filterRecipes(state.recipes, action.payload),
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
        filters: {
          text: null,
          title: true,
          ingredients: false,
          preparation: false,
          category: null,
          bookmarked: false,
        },
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
