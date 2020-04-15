import React from "react";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { connect } from "react-redux";
import { removeStep, editStep } from "../../../actions/steps";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  sectionTitle: {
    color: "#757575",
    paddingBottom: "1rem",
    borderBottom: "1px solid #757575"
  },
  step: {
    width: "100%",
    display: "flex"
  },
  icon: {
    "&:hover": {
      "& $iconDelete": {
        color: "#ff0000"
      }
    }
  },
  iconDelete: {
    color: "#d3d3d3",
    pointerEvents: "none"
  },
  addStepField: {
    width: "50rem"
  }
});

const Step = ({ step, index, editStep, removeStep }) => {
  const classes = useStyles();

  return (
    <div className={classes.step}>
      <TextField
        onInput={e => editStep(e.target.value, index)}
        size="small"
        value={step}
        className={classes.step}
      />
      <IconButton
        type="remove"
        className={classes.icon}
        aria-label="remove"
        onClick={() => removeStep(index)}
      >
        <DeleteIcon className={classes.iconDelete} />
      </IconButton>
    </div>
  );
};

Step.propTypes = {
  editStep: PropTypes.func.isRequired,
  removeStep: PropTypes.func.isRequired
};

export default connect(null, { editStep, removeStep })(Step);
