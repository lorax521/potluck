import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    marginBottom: "2em",
  },
  sectionTitle: {
    color: "#6f732f",
    textTransform: "uppercase",
    paddingBottom: "1rem",
    borderBottom: "2px solid #e9e9e9",
  },
  steps: {
    listStyle: "none",
    padding: 0,
  },
  step: {
    color: "#000",
    marginBottom: "1rem",
    maxWidth: "80%",
  },
  index: {
    color: "#fff",
    background: "#a9a9a9",
    borderRadius: "50%",
    textAlign: "center",
    width: "1.5em",
    height: "1.5em",
    display: "inline-grid",
    marginRight: "1em",
    pointerEvents: "none",
  },
});

const Steps = ({ steps }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h3 className={classes.sectionTitle}>Steps</h3>
      <ul className={classes.steps}>
        {steps
          ? steps.map((step, index) => {
              return (
                <li className={classes.step}>
                  <span className={classes.index}>{index + 1}</span>
                  {step}
                </li>
              );
            })
          : ""}
      </ul>
    </div>
  );
};

export default Steps;
