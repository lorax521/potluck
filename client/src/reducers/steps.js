import { ADD_STEP, REMOVE_STEP, EDIT_STEP } from "../actions/types";

const initialState = [];

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_STEP:
      return [...state, payload];
    case REMOVE_STEP:
      return [...state.filter((el, idx) => idx !== payload)];
    case EDIT_STEP:
      state[payload.index] = payload.value;
      return [...state];
    default:
      return state;
  }
}
