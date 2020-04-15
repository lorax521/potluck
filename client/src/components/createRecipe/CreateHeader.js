import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    borderBottom: "2px solid #a9a9a9",
    padding: "1em 0",
    marginBottom: "3em",
  },
});

const CreateHeader = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1>Create a new recipe</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
    </div>
  );
};

export default CreateHeader;
