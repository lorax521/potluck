import React, { useEffect } from "react";
import Profile from "./Profile";
import Ingredients from "./ingredients/Ingredients";
import Steps from "./steps/Steps";
import Save from "./Save";
import CreateHeader from "./CreateHeader";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "1rem 5rem",
    margin: "auto",
    maxWidth: "60rem",
    [theme.breakpoints.down("sm")]: {
      padding: "1em",
    },
  },
  save: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "3rem",
  },
}));

const init = () => {
  window.scrollTo(0, 0);
};

const CreateRecipe = ({ editable }) => {
  useEffect(() => {
    init();
  }, []);
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {!editable ? <CreateHeader /> : <br />}

      <Profile editable={editable} />
      <Ingredients editable={editable} />
      <Steps editable={editable} />
      <div className={classes.save}>
        <Save />
      </div>
    </div>
  );
};

CreateRecipe.propTypes = {
  editable: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  editable: state.edit,
});

export default connect(mapStateToProps, {})(CreateRecipe);
