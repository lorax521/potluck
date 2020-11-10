import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Button } from "@material-ui/core";
import moment from "moment";
import axios from "axios";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
  comment: {},
  commentUser: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8em",
    },
  },
  commentDate: {
    color: "#757575",
    margin: "-0.3em 0 0 0.3em",
  },
  commentText: {
    width: "80%",
    margin: "0 0 0 3rem",
    color: "#757575",
  },
  delete: {
    color: "#f50057",
    marginLeft: "1em",
    padding: "0.2em",
    "&:hover": {
      cursor: "pointer",
      background: "#f9f9f9",
      borderRadius: "50%",
    },
  },
}));

// TODO update moment time locality automatically
const Comment = ({ id, userid, user, comment, date, updateComments }) => {
  const classes = useStyles();

  const deleteComment = async () => {
    const config = {
      headers: {
        "auth-token": localStorage.token,
      },
    };
    const res = await axios.delete(`/api/recipes/comments/${id}`, config);
    console.log(res);
    updateComments();
  };

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
          {user}
        </div>{" "}
        <p className={classes.commentDate}> — {moment(date).format("llll")}</p>
        {userid === localStorage.user ? (
          <DeleteIcon className={classes.delete} onClick={deleteComment} />
        ) : (
          ""
        )}
      </div>
      <p className={classes.commentText}>{comment}</p>
    </div>
  );
};

export default Comment;
