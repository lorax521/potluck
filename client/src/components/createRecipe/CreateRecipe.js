import React, { useEffect } from "react";
import Profile from "./Profile";
import Ingredients from "./ingredients/Ingredients";
import Steps from "./steps/Steps";
import Save from "./Save";
import CreateHeader from "./CreateHeader";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    padding: "1rem 5rem",
    margin: "auto",
    maxWidth: "70rem",
  },
  save: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "3rem",
  },
});

const init = () => {
  window.scrollTo(0, 0);
};

const CreateRecipe = () => {
  useEffect(() => {
    init();
  }, []);
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <CreateHeader />
      <Profile />
      <Ingredients />
      <Steps />
      <div className={classes.save}>
        <Save />
      </div>
    </div>
  );
};

export default CreateRecipe;
