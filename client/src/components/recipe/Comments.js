import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Comment from "./Comment";
import { testcomments } from "./testdata";

const useStyles = makeStyles({
  sectionTitle: {
    color: "#757575",
    padding: "1rem 0",
    borderBottom: "1px solid #757575"
  },
  addComment: {
    display: "flex"
  },
  commentField: {
    marginRight: "1rem",
    flex: "1"
  },
  addCommentBtn: {
    fontWeight: "bold"
  }
});

const comments = testcomments;

const commentComponents = [];

for (const comment in comments) {
  commentComponents.push(
    <Comment
      user={comments[comment].user}
      comment={comments[comment].comment}
    />
  );
}

const Comments = () => {
  const classes = useStyles();

  return (
    <div className={classes.comments}>
      <h3 className={classes.sectionTitle}>Comments</h3>
      <div className={classes.addComment}>
        <TextField
          id="outlined-basic"
          label="New Comment"
          variant="outlined"
          size="small"
          className={classes.commentField}
        />
        <Button variant="outlined" className={classes.addCommentBtn}>
          Add Comment
        </Button>
      </div>
      {commentComponents}
    </div>
  );
};

export default Comments;
