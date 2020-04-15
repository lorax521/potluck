import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { teststeps } from "./testdata";

const useStyles = makeStyles({
  sectionTitle: {
    color: "#757575",
    paddingBottom: "1rem",
    borderBottom: "1px solid #757575"
  },
  step: {
    marginBottom: "1rem",
    maxWidth: "80%"
  }
});

const Steps = () => {
  const classes = useStyles();

  const steps = teststeps;

  const stepsComponents = [];
  for (const step in steps) {
    stepsComponents.push(<li className={classes.step}>{steps[step]}</li>);
  }

  return (
    <div className={classes.steps}>
      <h3 className={classes.sectionTitle}>Steps</h3>
      <ol>{stepsComponents}</ol>
    </div>
  );
};

export default Steps;
