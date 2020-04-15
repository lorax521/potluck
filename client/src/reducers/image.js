import { ADD_IMAGE } from "../actions/types";

const initialState = "";

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_IMAGE:
      state = payload;
      return payload;
    default:
      return state;
  }
}
