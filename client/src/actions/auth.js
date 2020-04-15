import { LOG_IN, ACCOUNT_CREATED, LOG_OUT } from "./types";
import axios from "axios";

export const login = ({ email, password }) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ email, password });
    const res = await axios.post("api/auth", body, config);

    dispatch({
      type: LOG_IN,
      payload: res.data,
    });
  } catch (error) {
    const errors = error.response.data.errors;

    if (errors) {
      errors.forEach((error) => console.log(error.msg, "danger"));
      alert(
        "Login unsuccessful - please check your credientials and try again."
      );
    }
    return false;
  }
};

export const createAccount = ({ name, email, password }) => async (
  dispatch
) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ name, email, password });
    const res = await axios.post("api/users", body, config);

    dispatch({
      type: ACCOUNT_CREATED,
      payload: res.data,
    });
    dispatch(login({ email, password }));
    return res;
  } catch (error) {
    console.log({ "unable to create account": error });
    const errors = error.response.data.errors;

    if (errors) {
      errors.forEach((error) => console.log(error.msg, "danger"));
    }
  }
};

export const logout = () => (dispatch) => {
  try {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    dispatch({
      type: LOG_OUT,
      payload: false,
    });
  } catch (error) {}
};
