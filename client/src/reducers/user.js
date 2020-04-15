import { LOG_IN } from "../actions/auth";

const inititalState = {};

export default function(state = inititalState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOG_IN:
      return {
        ...state,
        payload
      };
    default:
      return state;
  }
}
