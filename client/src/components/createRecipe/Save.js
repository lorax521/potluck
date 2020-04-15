import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { saveRecipe } from "../../actions/recipe";

const useStyles = makeStyles({
  button: {
    fontWeight: "bold",
    margin: "1rem",
  },
  save: {
    background: "#3c91e6",
    "&:hover": {
      background: "#347fca",
    },
  },
  cancel: {
    border: "none",
    "&:hover": {
      border: "none",
    },
    //   "&:hover": {
    //     background: "#df004f"
    //   }
  },
});

const Save = ({ recipe, saveRecipe }) => {
  // TODO add validation
  const classes = useStyles();

  const cancel = () => {
    console.log("canceling");
  };
  const save = async () => {
    try {
      console.log("saving");
      saveRecipe();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Fragment>
      <Button
        variant="outlined"
        color="secondary"
        className={`${classes.button} ${classes.cancel}`}
        onClick={cancel}
      >
        Cancel
      </Button>
      <Button
        variant="contained"
        color="primary"
        className={`${classes.button} ${classes.save}`}
        onClick={save}
      >
        Save
      </Button>
    </Fragment>
  );
};

export default connect(null, { saveRecipe })(Save);
