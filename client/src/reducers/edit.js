import { ACTIVATE_EDIT, DEACTIVATE_EDIT } from "../actions/types";

const initialState = false;

export default function (state = initialState, action, store) {
  const { type, payload } = action;

  switch (type) {
    case ACTIVATE_EDIT:
      return payload;
    case DEACTIVATE_EDIT:
      return payload;
    default:
      return state;
  }
}
