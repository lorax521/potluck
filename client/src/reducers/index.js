import { combineReducers } from "redux";
import steps from "./steps";
import ingredients from "./ingredients";
import servings from "./servings";
import title from "./title";
import description from "./description";
import tags from "./tags";
import image from "./image";
import auth from "./auth";

export default combineReducers({
  steps,
  ingredients,
  servings,
  title,
  description,
  tags,
  image,
  auth
});
