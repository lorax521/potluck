import { EDIT_TITLE } from "../actions/types";

const initialState = "";

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case EDIT_TITLE:
      return payload;
    default:
      return state;
  }
}
