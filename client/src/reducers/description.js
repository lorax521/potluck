import { EDIT_DESCRIPTION } from "../actions/types";

const initialState = "This recipe is the bees knees...";

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case EDIT_DESCRIPTION:
      return payload;
    default:
      return state;
  }
}
