import { GET_RECIPE } from "../actions/types";

const initialState = {};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_RECIPE:
      state = payload;
      return payload;
    default:
      return state;
  }
}
