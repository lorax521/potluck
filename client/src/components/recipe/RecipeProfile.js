import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { testimg } from "./testdata";

const useStyles = makeStyles({
  profile: {
    display: "flex",
    justifyContent: "flex-start"
  },
  image: {
    width: 400,
    height: 400,
    background: "#d3d3d3"
  },
  sectionTitle: {
    color: "#757575",
    paddingBottom: "1rem",
    borderBottom: "1px solid #757575"
  },
  profileContent: {
    marginLeft: "5rem",
    maxWidth: "40rem"
  },
  chips: {
    display: "flex",
    alignItems: "center",
    userSelect: "none"
  },
  chip: {
    margin: "0 0.5rem",
    color: "#fff",
    fontWeight: "bold",
    background: "#909090"
  },
  chipLikes: {
    color: "#ff0000",
    margin: "0 0.5rem"
  },
  chipLikesCount: {
    fontWeight: "bold"
  }
});

const RecipeProfile = () => {
  const classes = useStyles();
  return (
    <div className={classes.profile}>
      <img className={classes.image} src={testimg} alt="recipe"></img>
      <div className={classes.profileContent}>
        <h1>Tika Masala</h1>
        <h3 className={classes.sectionTitle}>Description</h3>
        <div className={classes.chips}>
          <p className={classes.chipLikesCount}>47</p>
          <FavoriteBorderIcon className={classes.chipLikes} />
          <Chip className={classes.chip} label="Indian" />
          <Chip className={classes.chip} label="Vegetarian" />
        </div>
        <p>
          This is veggie tika masala. Daang this is soo good. You can make it
          with coconut milk to make it vegan. I make this like once a week!
        </p>
      </div>
    </div>
  );
};

export default RecipeProfile;
