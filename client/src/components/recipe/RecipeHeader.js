import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteIcon from "@material-ui/icons/Favorite";
import IconButton from "@material-ui/core/IconButton";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import axios from "axios";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { activateEdit } from "../../actions/edit";
import { setIngredients } from "../../actions/ingredients";

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
  iconEdit: {
    color: "#fff",
    background: "#c9c9c9",
    padding: "0.5rem",
    marginRight: "1rem",
    "&:hover": {
      background: "#c1c1c1",
    },
  },
  iconFavorite: {
    color: "#fff",
    background: "#ff0000",
    padding: "0.5rem",
    marginRight: "1rem",
    "&:hover": {
      background: "#dc0000",
    },
  },
  iconShare: {
    color: "#fff",
    background: "#2c98f0",
    padding: "0.5rem",
    "&:hover": {
      background: "#278cde",
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

const RecipeHeader = ({
  username,
  user,
  id,
  likes,
  activateEdit,
  setIngredients,
}) => {
  const classes = useStyles();
  const [liked, setLiked] = useState(undefined);

  const like = async () => {
    const likesCount = document.getElementById("likes-count");
    const currentLikes = parseInt(likesCount.innerHTML);
    if (liked === undefined) {
      likes.includes(localStorage.user)
        ? (likesCount.innerHTML = (currentLikes - 1).toString())
        : (likesCount.innerHTML = (currentLikes + 1).toString());
      setLiked(!likes.includes(localStorage.user));
    } else {
      liked
        ? (likesCount.innerHTML = (currentLikes - 1).toString())
        : (likesCount.innerHTML = (currentLikes + 1).toString());
      setLiked(!liked);
    }
    const config = {
      headers: {
        "auth-token": localStorage.token,
      },
    };
    const res = await axios.post(`/api/recipes/like/${id}`, null, config);
    console.log(res);
  };

  const editRecipe = () => {
    // activateEdit();
    setIngredients();
  };

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
          {username}
        </div>
        <Button className={classes.follow} variant="outlined">
          Follow
        </Button>
      </div>
      <div>
        {user == localStorage.user ? (
          <Link to="/create">
            <IconButton className={classes.iconEdit} onClick={editRecipe}>
              <EditIcon className={classes.iconsvg} />
            </IconButton>
          </Link>
        ) : (
          ""
        )}
        <IconButton
          type="favoite"
          className={classes.iconFavorite}
          aria-label="favorite"
          onClick={like}
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

RecipeHeader.propTypes = {
  activateEdit: PropTypes.func.isRequired,
  setIngredients: PropTypes.func.isRequired,
};

export default connect(null, { activateEdit, setIngredients })(RecipeHeader);
