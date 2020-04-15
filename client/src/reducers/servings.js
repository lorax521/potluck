import { EDIT_SERVINGS } from "../actions/types";

const initialState = "4";

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case EDIT_SERVINGS:
      return payload;
    default:
      return state;
  }
}
