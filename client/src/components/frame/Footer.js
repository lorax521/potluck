import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import HomeIcon from "@material-ui/icons/Home";
import AddIcon from "@material-ui/icons/Add";
import PersonAddIcon from "@material-ui/icons/PersonAdd";

const useStyles = makeStyles((theme) => ({
  container: {
    background: "#607b7d",
    borderRadius: 0,
    bottom: 0,
    position: "absolute",
    marginTop: "1rem",
    display: "flex",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "3.7rem",
    },
  },
  content: {
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    justifyContent: "space-between",
    margin: "auto",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      display: "inline",
      width: "100%",
    },
  },
  section: {},
  list: {
    listStyle: "none",
    padding: 0,
  },
  icon: {
    fontSize: "1.5em",
    color: "#fff",
  },
  links: {
    display: "flex",
    justifyContent: "space-evenly",
    padding: "0 30%",
    [theme.breakpoints.down("sm")]: {
      padding: 0,
    },
  },
}));

// TODO make always on bottom
const Footer = () => {
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.container}>
        <div className={classes.content}>
          <div className={classes.links}>
            <div className={classes.section}>
              <h4>Contact</h4>
              <ul className={classes.list}>
                <IconButton>
                  <MailOutlineIcon className={classes.icon} />
                </IconButton>
              </ul>
            </div>
            <div className={classes.section}>
              <h4>About</h4>
              <ul className={classes.list}>
                <IconButton>
                  <HomeIcon className={classes.icon} />
                </IconButton>
              </ul>
            </div>
            <div className={classes.section}>
              <h4>Participate</h4>
              <ul className={classes.list}>
                <IconButton>
                  <AddIcon className={classes.icon} />
                </IconButton>
              </ul>
            </div>
            <div className={classes.section}>
              <h4>Join</h4>
              <ul className={classes.list}>
                <IconButton>
                  <PersonAddIcon className={classes.icon} />
                </IconButton>
              </ul>
            </div>
          </div>
          <div className={classes.section}></div>
          <p>© 2020 Potluck - All Rights Reserved</p>
        </div>
      </Paper>
    </div>
  );
};

export default Footer;
