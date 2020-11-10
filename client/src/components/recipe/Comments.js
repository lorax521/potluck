import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Comment from "./Comment";
import axios from "axios";

const useStyles = makeStyles({
  sectionTitle: {
    color: "#6f732f",
    textTransform: "uppercase",
    paddingBottom: "1rem",
    borderBottom: "2px solid #e9e9e9",
  },
  addComment: {
    display: "flex",
  },
  commentField: {
    marginRight: "1rem",
    flex: "1",
  },
  addCommentBtn: {
    fontWeight: "bold",
  },
});

const Comments = ({ id, username }) => {
  const classes = useStyles();
  const [comments, setComments] = useState([]);

  const updateComments = async () => {
    try {
      const res = await axios.get(`/api/recipes/comments/${id}`);
      if (res.data.comments) {
        const resComments = Object.keys(res.data.comments).map((comment) => (
          <Comment
            id={res.data.comments[comment]._id}
            userid={res.data.comments[comment].user}
            user={res.data.comments[comment].username}
            comment={res.data.comments[comment].comment}
            date={res.data.comments[comment].date}
            updateComments={updateComments}
          />
        ));
        setComments([...resComments]);
      }
    } catch (error) {
      console.log("cannot update comments");
    }
  };

  useEffect(() => {
    updateComments();
  }, []);

  const addComment = async (id, username) => {
    const newComment = document.querySelector("#new-comment").value;
    const user = localStorage.user;
    const headers = {
      "Content-Type": "application/json",
    };
    const res = await axios.post(
      "/api/recipes/comments",
      { id, user, username, comment: newComment },
      headers
    );
    document.querySelector("#new-comment").value = "";
    updateComments();
  };

  const keyDown = (e) => {
    if (e.key === "Enter") {
      addComment(id, username);
    }
  };

  return (
    <div className={classes.comments}>
      <h3 className={classes.sectionTitle}>Comments</h3>
      <div className={classes.addComment}>
        <TextField
          id="new-comment"
          label="New Comment"
          variant="outlined"
          size="small"
          className={classes.commentField}
          onKeyDown={(e) => keyDown(e)}
        />
        <Button
          variant="outlined"
          className={classes.addCommentBtn}
          onClick={() => addComment(id, username)}
        >
          Add Comment
        </Button>
      </div>
      {comments ? comments : ""}
      {}
    </div>
  );
};

export default Comments;
