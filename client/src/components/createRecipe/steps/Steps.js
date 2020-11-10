import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import { connect } from "react-redux";
import { addStep, editStep } from "../../../actions/steps";
import Step from "./Step";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  sectionTitle: {
    color: "#757575",
    paddingBottom: "1rem",
    borderBottom: "2px solid #e9e9e9",
  },
  steps: {
    display: "inline-grid",
    paddingLeft: "0.1rem",
    margin: "0 0 2rem 0",
    width: "100%",
  },
  step: {
    marginLeft: "1rem",
  },
  icon: {
    "&:hover": {
      "& $iconDelete": {
        color: "#ff0000",
      },
    },
  },
  iconDelete: {
    color: "#d3d3d3",
    pointerEvents: "none",
  },
  addStepField: {
    width: "50rem",
    [theme.breakpoints.down("sm")]: {
      width: "85%",
    },
  },
}));

const Steps = ({ steps, addStep, editStep, editable, editableSteps }) => {
  const classes = useStyles();
  const inputRef = React.useRef();

  const initEditable = () => {
    if (editable) {
      steps = editableSteps;
      steps.map((value, index) => {
        editStep(value, index);
      });
    }
  };

  initEditable();

  const add = () => {
    const step = document.querySelector("#add-step");
    addStep(step.value);
    step.value = "";
    setTimeout(() => {
      inputRef.current.focus();
    }, 100);
  };

  const keyDown = (e) => {
    if (e.key === "Enter") {
      add();
    }
  };

  const AddStep = () => {
    return (
      <div>
        <TextField
          id="add-step"
          inputRef={inputRef}
          label="Add Step"
          variant="outlined"
          size="small"
          onKeyDown={(e) => keyDown(e)}
          className={classes.addStepField}
        />
        <IconButton
          type="add"
          className={classes.icon}
          aria-label="add"
          onClick={add}
        >
          <AddCircleOutlineIcon className={classes.iconsvg} />
        </IconButton>
      </div>
    );
  };

  return (
    <div className={classes.container}>
      <h3 className={classes.sectionTitle}>Steps</h3>
      <ol className={classes.steps}>
        {steps.map((step, index) => {
          return (
            <li className={classes.step} key={index}>
              <Step step={step} index={index} />
            </li>
          );
        })}
      </ol>
      <AddStep />
    </div>
  );
};

Steps.propTypes = {
  addStep: PropTypes.func.isRequired,
  editStep: PropTypes.func.isRequired,
  steps: PropTypes.array.isRequired,
  editableSteps: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  steps: state.steps,
  editableSteps: state.getrecipe.steps,
});

export default connect(mapStateToProps, { addStep, editStep })(Steps);
