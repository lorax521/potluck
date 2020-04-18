import { POST_COMMENT, GET_COMMENTS } from "./types";
import axios from "axios";

export const postComment = (value) => async (dispatch) => {
  try {
    dispatch({
      type: POST_COMMENT,
      payload: null,
    });
  } catch (error) {
    console.error({ msg: "There was an error posting the comment" });
  }
};

export const getComments = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`api/recipes/comments/${id}`);
    dispatch({
      type: GET_COMMENTS,
      payload: null,
    });
    return res.data;
  } catch (error) {
    console.error({ msg: "There was an error getting comments" });
  }
};
