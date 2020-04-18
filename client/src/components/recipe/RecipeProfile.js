import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "flex-start",
    marginBottom: "2em",
  },
  title: {
    textTransform: "capitalize",
  },
  image: {
    background: "#d3d3d3",
    width: 400,
    height: 400,
    objectFit: "cover",
    borderWidth: 0,
    borderRadius: "4px",
  },
  sectionTitle: {
    color: "#6f732f",
    textTransform: "uppercase",
    paddingBottom: "1rem",
    borderBottom: "2px solid #e9e9e9",
  },
  profileContent: {
    marginLeft: "5rem",
    maxWidth: "40rem",
    width: "100%",
  },
  chips: {
    display: "flex",
    alignItems: "center",
    userSelect: "none",
  },
  chip: {
    margin: "0 0.5rem",
    color: "#fff",
    fontWeight: "bold",
    background: "#909090",
  },
  chipLikes: {
    color: "#ff0000",
    margin: "0 0.5rem",
  },
  chipLikesCount: {
    fontWeight: "bold",
  },
});

const RecipeProfile = ({ title, description, tags, image, likes }) => {
  const classes = useStyles();

  const Tags = ({ tags }) => {
    return (
      <Fragment>
        {tags
          ? tags.map((tag) => {
              return <Chip className={classes.chip} label={tag} />;
            })
          : ""}
      </Fragment>
    );
  };

  return (
    <div className={classes.root}>
      <img
        className={classes.image}
        src={`/images/recipes/${image}`}
        alt=""
      ></img>
      <div className={classes.profileContent}>
        <h1 className={classes.title}>{title}</h1>
        <div className={classes.chips}>
          <p className={classes.chipLikesCount}>{likes ? likes.length : ""}</p>
          <FavoriteBorderIcon className={classes.chipLikes} />

          <Tags tags={tags} />
        </div>
        <h3 className={classes.sectionTitle}>Description</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default RecipeProfile;
