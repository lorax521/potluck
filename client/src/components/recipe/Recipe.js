import React, { useEffect } from "react";
import RecipeHeader from "./RecipeHeader";
import RecipeProfile from "./RecipeProfile";
import Ingredients from "./Ingredients";
import Steps from "./Steps";
import Comments from "./Comments";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    padding: "1rem 5rem",
    margin: "auto",
    maxWidth: "70rem",
  },
});

const init = () => {
  window.scrollTo(0, 0);
};

const Recipe = () => {
  useEffect(() => {
    init();
  }, []);
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <RecipeHeader />
      <RecipeProfile />
      <Ingredients />
      <Steps />
      <Comments />
    </div>
  );
};

export default Recipe;
