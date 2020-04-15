import {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  EDIT_INGREDIENT_QTY,
  EDIT_INGREDIENT_INGREDIENT,
  ADD_CATEGORY,
  EDIT_CATEGORY,
  REMOVE_CATEGORY,
} from "./types";

export const addCategory = (category, index) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_CATEGORY,
      payload: category,
    });
  } catch (error) {
    console.log(error);
  }
};

export const removeCategory = (index) => async (dispatch) => {
  try {
    dispatch({
      type: REMOVE_CATEGORY,
      payload: index,
    });
  } catch (error) {
    console.log({ msg: "There was an error adding to the store" });
  }
};

export const editCategory = (value, index) => async (dispatch) => {
  try {
    dispatch({
      type: EDIT_CATEGORY,
      payload: {
        value,
        index,
      },
    });
  } catch (error) {
    console.log({ msg: "There was an error adding to the store" });
  }
};

export const addIngredient = (qty, ingredient, index) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_INGREDIENT,
      payload: {
        qty,
        ingredient,
        index,
      },
    });
  } catch (error) {
    console.log({ msg: error });
  }
};

export const removeIngredient = (categoryIndex, ingredientIndex) => async (
  dispatch
) => {
  try {
    dispatch({
      type: REMOVE_INGREDIENT,
      payload: {
        categoryIndex,
        ingredientIndex,
      },
    });
  } catch (error) {
    console.log({ msg: "There was an error adding to the store" });
  }
};

export const editIngredientQty = (
  value,
  categoryIndex,
  ingredientIndex
) => async (dispatch) => {
  try {
    dispatch({
      type: EDIT_INGREDIENT_QTY,
      payload: {
        value,
        categoryIndex,
        ingredientIndex,
      },
    });
  } catch (error) {
    console.log({ msg: "There was an error adding to the store" });
  }
};

export const editIngredientIngredient = (
  value,
  categoryIndex,
  ingredientIndex
) => async (dispatch) => {
  try {
    dispatch({
      type: EDIT_INGREDIENT_INGREDIENT,
      payload: {
        value,
        categoryIndex,
        ingredientIndex,
      },
    });
  } catch (error) {
    console.log({ msg: "There was an error adding to the store" });
  }
};
