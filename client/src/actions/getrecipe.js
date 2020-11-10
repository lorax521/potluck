import { GET_RECIPE } from "./types";
import axios from "axios";

export const getRecipe = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/recipes/${id}`);
    dispatch({
      type: GET_RECIPE,
      payload: res.data.recipe,
    });
  } catch (error) {
    console.log({ msg: "There was an error getting the recipe" });
    console.log({ err: error });
  }
};
