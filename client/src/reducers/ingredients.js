import {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  EDIT_INGREDIENT_QTY,
  EDIT_INGREDIENT_INGREDIENT,
  ADD_CATEGORY,
  EDIT_CATEGORY,
  REMOVE_CATEGORY,
  SET_INGREDIENTS,
} from "../actions/types";

const initialState = [];

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_CATEGORY:
      const obj = {
        category: payload,
        ingredients: [],
      };
      return [...state, obj];
    case REMOVE_CATEGORY:
      return [...state.filter((el, idx) => idx !== payload)];
    case EDIT_CATEGORY:
      state[payload.index].category = payload.value;
      return [...state];
    case ADD_INGREDIENT:
      state[payload.index].ingredients.push({
        qty: payload.qty,
        ingredient: payload.ingredient,
      });
      return [...state];
    case REMOVE_INGREDIENT:
      state[payload.categoryIndex].ingredients = state[
        payload.categoryIndex
      ].ingredients.filter((el, idx) => idx !== payload.ingredientIndex);
      return [...state];
    case EDIT_INGREDIENT_QTY:
      state[payload.categoryIndex].ingredients[payload.ingredientIndex].qty =
        payload.value;
      return [...state];
    case EDIT_INGREDIENT_INGREDIENT:
      state[payload.categoryIndex].ingredients[
        payload.ingredientIndex
      ].ingredient = payload.value;
      return [...state];
    case SET_INGREDIENTS:
      return [...payload];
    default:
      return state;
  }
}
