import { POST_COMMENT, GET_COMMENTS, DELETE_COMMENT } from "./types";
import axios from "axios";

// TODO add reducers for all methods
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

export const deleteComment = (id) => async (dipatch) => {
  try {
    const res = await axios.delete(`api/recipes/comments${id}`);
    dispatch({
      type: DELETE_COMMENT,
      payload: null,
    });
  } catch (error) {
    console.error({ msg: "There was an error deleting the comment" });
  }
};
