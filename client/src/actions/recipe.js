import { SAVE_RECIPE } from "./types";
import axios from "axios";
import store from "../store";

export const saveRecipe = () => async (dispatch) => {
  try {
    const state = store.getState();
    const recipe = {
      user: localStorage.user,
      title: state.title,
      description: state.description,
      tags: state.tags,
      servings: state.servings,
      ingredients: state.ingredients,
      steps: state.steps,
      image: state.image,
    };
    // const headers = {
    //   "Content-Type": "multipart/form-data"
    // };
    const headers = {
      "Content-Type": "application/json",
    };

    const recipeStr = JSON.stringify(recipe);
    const blob = new Blob([recipeStr], { type: "application/json" });

    const formData = new FormData();
    formData.append("data", recipeStr);
    formData.append("file", recipe.image);

    const res = await axios.post("api/recipes", formData, headers);
    console.log({ response: res });
    //  TODO add alert for success
    alert("Recipe saved successfully!");
    dispatch({
      type: SAVE_RECIPE,
      payload: res.data,
    });
  } catch (error) {
    console.log({ msg: "There was an error saving the recipe" });
    //  TODO add alert for failure
    alert("Unable to save recipe. Please ensure you've filled out all fields");
  }
};
