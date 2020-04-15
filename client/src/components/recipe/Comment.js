import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles({
  comment: {},
  commentUser: {
    display: "flex",
    alignItems: "center"
  },
  commentDate: {
    color: "#757575"
  },
  commentText: {
    width: "80%",
    margin: "0 0 0 3rem",
    color: "#757575"
  }
});

const Comment = props => {
  const classes = useStyles();
  return (
    <div className={classes.comment}>
      <div className={classes.commentUser}>
        <div className={classes.user}>
          <IconButton
            type="user"
            className={classes.iconUser}
            aria-label="user"
          >
            <AccountCircleIcon className={classes.iconsvg} />
          </IconButton>
          {props.user}
        </div>
        <p className={classes.commentDate}> — 02/29/2020 5:14 pm</p>
      </div>
      <p className={classes.commentText}>{props.comment}</p>
    </div>
  );
};

export default Comment;
