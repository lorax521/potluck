import { ACCOUNT_CREATED, LOG_IN, LOG_OUT } from "../actions/types";
const inititalState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  user: null,
};

export default function (state = inititalState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOG_IN:
      localStorage.setItem("token", payload.token);
      localStorage.setItem("user", payload.user);
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload.user,
      };
    case ACCOUNT_CREATED:
      return {
        ...state,
        isAuthenticated: false,
        loading: true,
        user: null,
      };
    case LOG_OUT:
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        user: null,
      };
    default:
      return state;
  }
}
