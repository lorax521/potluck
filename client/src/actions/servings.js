import { EDIT_SERVINGS } from "./types";

export const editServings = value => async dispatch => {
  try {
    dispatch({
      type: EDIT_SERVINGS,
      payload: value
    });
  } catch (error) {
    console.log({ msg: "There was an error adding to the store" });
  }
};
