import React, { Fragment, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";
import { Redirect } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
    // minHeight: "71VH",
    // width: "100vw",
    // height: "100vh",
    display: "flex",
    // justifyContent: "center",
    // alignContent: "center",
    // position: "fixed",
    // zIndex: "100"
    flex: 1,
  },
  paper: {
    width: "23rem",
    height: "23rem",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    margin: "auto",
  },
  buttons: {
    display: "flex",
    margin: "auto",
  },
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
    //   "&:hover": {
    //     background: "#df004f"
    //   }
    color: "#3c91e6",
  },
  header: {
    color: "#6f732f",
    textTransform: "uppercase",
  },
  input: {
    margin: "1em",
  },
  subheader: {
    marginTop: 0,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "85%",
  },
}));

const LogIn = ({ history, login, isAuthenticated }) => {
  const classes = useStyles();

  const onLoad = () => {
    const emailField = document.getElementById("login-email");
    emailField.focus();
  };

  useEffect(() => {
    onLoad();
  });

  // const cancel = () => {
  //   console.log("canceling");
  // };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const nodes = Object.values(e.target.elements).filter(
        (el) => el.nodeName === "INPUT"
      );
      const [email, password] = nodes.map((el) => el.value);
      login({ email, password });
      // document.getElementById("form-login").reset();
    } catch (error) {
      console.log(error);
    }
  };

  const reroute = () => {
    history.push("/createaccount");
  };

  const LoginCard = () => {
    return (
      <div className={classes.root}>
        <Paper className={classes.paper} elevation={3}>
          <h2 className={classes.header}>Potluck</h2>
          <h3 className={classes.subheader}>Log In</h3>
          <form className={classes.form} onSubmit={onSubmit} id="form-login">
            <TextField
              label="Email Address"
              variant="outlined"
              size="small"
              className={classes.input}
              id="login-email"
            />
            <TextField
              label="Password"
              variant="outlined"
              size="small"
              type="password"
              className={classes.input}
            />
            <div className={classes.buttons}>
              <Button
                className={`${classes.button} ${classes.cancel}`}
                onClick={reroute}
              >
                Create Account
              </Button>
              <Button
                variant="contained"
                color="primary"
                className={`${classes.button} ${classes.save}`}
                type="submit"
              >
                Log In
              </Button>
            </div>
          </form>
        </Paper>
      </div>
    );
  };

  return (
    <Fragment>
      {!isAuthenticated ? <LoginCard /> : <Redirect to="/" />}
    </Fragment>
  );
};

LogIn.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(LogIn);
// export default connect(null, { login })(LogIn);
