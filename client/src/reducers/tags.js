import { EDIT_TAGS } from "../actions/types";

const initialState = "";

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case EDIT_TAGS:
      return payload;
    default:
      return state;
  }
}
