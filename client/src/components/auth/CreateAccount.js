import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router-dom";
import { createAccount } from "../../actions/auth";
import PropTypes from "prop-types";
import { connect } from "react-redux";

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
    height: "auto",
    padding: "2em 0",
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

const CreateAccount = ({ createAccount, history }) => {
  const classes = useStyles();

  const onLoad = () => {
    const emailField = document.getElementById("createaccount-username");
    emailField.focus();
  };

  useEffect(() => {
    onLoad();
  });

  const reroute = () => {
    history.push("/login");
  };

  const create = async (e) => {
    e.preventDefault();
    try {
      const nodes = Object.values(e.target.elements).filter(
        (el) => el.nodeName === "INPUT"
      );
      const [name, email, password] = nodes.map((el) => el.value);
      createAccount({ name, email, password });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={3}>
        <h2 className={classes.header}>Potluck</h2>
        <h3 className={classes.subheader}>Create Account</h3>
        <form onSubmit={(e) => create(e)} className={classes.form}>
          <TextField
            label="User Name"
            variant="outlined"
            size="small"
            className={classes.input}
            id="createaccount-username"
          />
          <TextField
            label="Email Address"
            type="email"
            variant="outlined"
            size="small"
            className={classes.input}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            size="small"
            className={classes.input}
          />
          <div className={classes.buttons}>
            <Button
              className={`${classes.button} ${classes.cancel}`}
              onClick={reroute}
            >
              Log In
            </Button>
            <Button
              variant="contained"
              color="primary"
              className={`${classes.button} ${classes.save}`}
              type="submit"
            >
              Create
            </Button>
          </div>
        </form>
      </Paper>
    </div>
  );
};

CreateAccount.propTypes = {
  createAccount: PropTypes.func.isRequired,
};

export default connect(null, { createAccount })(withRouter(CreateAccount));
