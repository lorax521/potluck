import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import PeopleIcon from "@material-ui/icons/People";
import FindInPageIcon from "@material-ui/icons/FindInPage";
import RestaurantIcon from "@material-ui/icons/Restaurant";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "1rem 5rem",
    maxWidth: "50rem",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      padding: "1em",
    },
  },
  img: {
    minWidth: "100vw",
    maxHeight: "400px",
    objectFit: "cover",
  },
  description: {
    fontSize: "1.5rem",
  },
  sections: {
    display: "flex",
    flexFlow: "row wrap",
    margin: "auto",
    justifyContent: "center",
  },
  section: {
    width: "20rem",
    padding: "1rem",
    margin: "1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: "11rem",
  },
  btn: {
    fontWeight: "bold",
    color: "#fff",
    background: "#46acc2",
  },
  icon: {
    color: "#757575",
    fontSize: "3rem",
  },
}));

const Landing = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <img
        className={classes.img}
        src={require("../assets/images/landing.jpg")}
        alt="landing"
      ></img>
      <div className={classes.container}>
        <h1>Welcome to Potluck!</h1>
        <p className={classes.description}>
          Save the recipes you love. Share them with friends and family. Steal
          other people's famous recipes. Weclome to Potluck, never leave hungry.
        </p>
        <div className={classes.sections}>
          <Paper className={classes.section} elevation={3}>
            <RestaurantIcon className={classes.icon} />
            <div>
              <h3>Save your recipes</h3>
              <Button className={classes.btn} variant="contained">
                Add a Recipe
              </Button>
            </div>
          </Paper>
          <Paper className={classes.section} elevation={3}>
            <PeopleIcon className={classes.icon} />
            <div>
              <h3>Share recipes with family & friends</h3>
              <Button className={classes.btn} variant="contained">
                Create a Group
              </Button>
            </div>
          </Paper>
          <Paper className={classes.section} elevation={3}>
            <FindInPageIcon className={classes.icon} />
            <div>
              <h3>Find new recipes</h3>
              <Button className={classes.btn} variant="contained">
                Search Recipes
              </Button>
            </div>
          </Paper>
          <Paper className={classes.section} elevation={3}>
            <MenuBookIcon className={classes.icon} />
            <div>
              <h3>Create a recipe book from your collections</h3>
              <Button className={classes.btn} variant="contained">
                Create Printable Recipe Book
              </Button>
            </div>
          </Paper>
        </div>
      </div>
    </Fragment>
  );
};

export default Landing;
