import { EDIT_TAGS } from "./types";

export const editTags = value => async dispatch => {
  try {
    dispatch({
      type: EDIT_TAGS,
      payload: value
    });
  } catch (error) {
    console.log({ msg: "There was an error adding to the store" });
  }
};
