import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteIcon from "@material-ui/icons/Favorite";
import IconButton from "@material-ui/core/IconButton";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  recipeHeader: {
    display: "flex",
    justifyContent: "space-between",
    margin: "1em 0 2em 0",
  },
  follow: {
    fontWeight: "bold",
    borderRadius: "50px",
  },
  iconFavorite: {
    color: "#fff",
    background: "#ff0000",
    padding: "0.5rem",
    marginRight: "1rem",
    "&::hover": {
      background: "#dc0000",
    },
  },
  iconShare: {
    color: "#fff",
    background: "#2c98f0",
    padding: "0.5rem",
    "&::hover": {
      background: "#258bde",
    },
  },
  iconsvg: { fontSize: "1.5rem" },
  servings: {
    display: "flex",
    alignItems: "center",
    margin: "2rem 0",
  },
  usercontainer: {
    display: "flex",
  },
  user: {
    marginRight: "1rem",
  },
  iconUserButton: {
    margin: 0,
    padding: 0,
    marginRight: "0.5rem",
  },
  iconUser: {
    fontSize: "2.5rem",
    padding: 0,
    margin: 0,
  },
});

const RecipeHeader = () => {
  const classes = useStyles();
  return (
    <div className={classes.recipeHeader}>
      <div className={classes.usercontainer}>
        <div className={classes.user}>
          <IconButton
            type="user"
            className={classes.iconUserButton}
            aria-label="user"
          >
            <AccountCircleIcon className={classes.iconUser} />
          </IconButton>
          User Name
        </div>
        <Button className={classes.follow} variant="outlined">
          Follow
        </Button>
      </div>
      <div>
        {" "}
        <IconButton
          type="favoite"
          className={classes.iconFavorite}
          aria-label="favorite"
        >
          <FavoriteIcon className={classes.iconsvg} />
        </IconButton>
        <IconButton
          type="share"
          className={classes.iconShare}
          aria-label="share"
        >
          <ShareIcon className={classes.iconsvg} />
        </IconButton>
      </div>
    </div>
  );
};

export default RecipeHeader;
