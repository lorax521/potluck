import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import { editServings } from "../../../actions/servings";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  servings: {
    display: "flex",
    alignItems: "center",
    margin: "2rem 0",
    width: "5rem"
  }
});

const Servings = ({ servings, editServings }) => {
  const classes = useStyles();

  return (
    <Fragment>
      <TextField
        className={classes.servings}
        label="Servings"
        id="outlined-size-normal"
        defaultValue={servings}
        variant="outlined"
        size="small"
        onChange={e => editServings(e.target.value)}
      />
    </Fragment>
  );
};

Servings.propTypes = {
  editServings: PropTypes.func.isRequired,
  servings: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  servings: state.servings
});

export default connect(mapStateToProps, { editServings })(Servings);
