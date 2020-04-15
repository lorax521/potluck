import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    background: "#607b7d",
    padding: "0.5rem 5rem",
    borderRadius: 0,
    bottom: 0,
    position: "relative",
    marginTop: "1rem",
    display: "flex"
  },
  content: {
    color: "#fff",
    display: "flex",
    width: "50rem",
    justifyContent: "space-between",
    margin: "auto"
  },
  section: {},
  list: {
    listStyle: "none",
    padding: 0
  }
});

// TODO make always on bottom
const Footer = () => {
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.container}>
        <div className={classes.content}>
          <div className={classes.section}>
            <h4>Support</h4>
            <ul className={classes.list}>
              <li>Contact Us</li>
              <li>Customer Support</li>
            </ul>
          </div>
          <div className={classes.section}>
            <h4>About Pockluck</h4>
            <ul className={classes.list}>
              <li>Home</li>
            </ul>
          </div>
          <div className={classes.section}>
            <h4>Participate</h4>
            <ul className={classes.list}>
              <li>Add a Recipe</li>
              <li>Create a Group</li>
              <li>Find New Recipes</li>
              <li>Create a Cookbook</li>
            </ul>
          </div>
          <div className={classes.section}>
            <h4>Join Pockluck</h4>
            <ul className={classes.list}>
              <li>Login/Register</li>
            </ul>
          </div>
          <div className={classes.section}>
            <p>© 2020 Potluck </p>
            <p>All Rights Reserved</p>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default Footer;
