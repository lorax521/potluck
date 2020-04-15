import { EDIT_DESCRIPTION } from "./types";

export const editDescription = value => async dispatch => {
  try {
    dispatch({
      type: EDIT_DESCRIPTION,
      payload: value
    });
  } catch (error) {
    console.log({ msg: "There was an error adding to the store" });
  }
};
