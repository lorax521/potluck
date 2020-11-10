import { ACTIVATE_EDIT, DEACTIVATE_EDIT } from "./types";
import store from "../store";

export const activateEdit = () => async (dispatch) => {
  try {
    const state = store.getState();
    console.log(state);
    dispatch({
      type: ACTIVATE_EDIT,
      payload: true,
    });
  } catch (error) {
    console.log({ msg: "There was an error activating edit mode" });
  }
};

export const deactivateEdit = () => async (dispatch) => {
  try {
    dispatch({
      type: DEACTIVATE_EDIT,
      payload: false,
    });
  } catch (error) {
    console.log({ msg: "There was an error activating edit mode" });
  }
};
