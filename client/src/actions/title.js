import { EDIT_TITLE } from "./types";

export const editTitle = value => async dispatch => {
  try {
    dispatch({
      type: EDIT_TITLE,
      payload: value
    });
  } catch (error) {
    console.log({ msg: "There was an error adding to the store" });
  }
};
