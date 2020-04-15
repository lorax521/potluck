import { ADD_IMAGE } from "./types";

export const addImage = file => async dispatch => {
  try {
    dispatch({
      type: ADD_IMAGE,
      payload: file
    });
  } catch (error) {
    console.log({ msg: "There was an error adding to the store" });
    console.log({ err: error });
  }
};
