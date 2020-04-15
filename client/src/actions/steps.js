import { ADD_STEP, REMOVE_STEP, EDIT_STEP } from "./types";

export const addStep = step => async dispatch => {
  try {
    dispatch({
      type: ADD_STEP,
      payload: step
    });
  } catch (error) {
    console.log({ msg: "There was an error adding to the store" });
  }
};

export const removeStep = index => async dispatch => {
  try {
    dispatch({
      type: REMOVE_STEP,
      payload: index
    });
  } catch (error) {
    console.log({ msg: "There was an error adding to the store" });
  }
};

export const editStep = (value, index) => async dispatch => {
  try {
    dispatch({
      type: EDIT_STEP,
      payload: {
        value,
        index
      }
    });
  } catch (error) {
    console.log({ msg: "There was an error adding to the store" });
  }
};
