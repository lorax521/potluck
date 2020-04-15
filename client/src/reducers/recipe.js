import { SAVE_RECIPE } from "../actions/types";

const inititalState = {};

export default function(state = inititalState, action) {
  const { type, payload } = action;
  switch (type) {
    case SAVE_RECIPE:
      return state;
    default:
      return state;
  }
}
