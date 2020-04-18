import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const useStyles = makeStyles({
  card: {
    width: 300,
    margin: "1rem",
  },
  cardMedia: {
    height: 300,
  },
  cardTitle: {
    position: "absolute",
    bottom: "-17px",
    color: "#fff",
    textShadow: "1px 1px 2px #ff0000",
  },
  cardActions: {
    padding: 0,
    display: "inline",
  },
  icon: {
    color: "#648dae",
  },
  iconFavorite: {
    color: "#ff0000",
  },
  iconsvg: { fontSize: "1.5rem" },
  top: {
    display: "flex",
    justifyContent: "space-between",
  },
  bottom: {
    display: "flex",
  },
  actionContent: {
    display: "flex",
    alignItems: "center",
    userSelect: "none",
  },
  actionContentLikes: {
    "&:first-child": {
      margin: "0 0 0 1.5rem",
      fontWeight: "bold",
    },
    "&:last-child": {
      margin: "0 0 0 0.5rem",
      textShadow: "2px 2px #ff0000",
      color: "#ff0000",
    },
  },
});

const RecipeCard = ({ id, title, user, image, likes }) => {
  const classes = useStyles();

  // <Link to="/recipe">
  //   <CardMedia
  //     className={classes.cardMedia}
  //     image={`/images/recipes/${image}`}
  //     title={title}
  //   />
  // </Link>

  // const onClick = () => {
  //   getRecipe(id);
  // };

  return (
    <Card className={classes.card} elevation={3}>
      <CardActionArea>
        <Link to={`/recipe/${id}`}>
          <CardMedia
            className={classes.cardMedia}
            image={`/images/recipes/${image}`}
            title={title}
          />
        </Link>
        <CardContent className={classes.cardTitle}>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <div className={classes.top}>
          <div className={classes.actionContent}>
            <p className={classes.actionContentLikes}>{likes}</p>
            <FavoriteBorderIcon className={classes.actionContentLikes} />
          </div>
          <div>
            <IconButton
              type="favoite"
              className={classes.iconFavorite}
              aria-label="favorite"
            >
              <FavoriteIcon className={classes.iconsvg} />
            </IconButton>
            <IconButton
              type="share"
              className={classes.icon}
              aria-label="share"
            >
              <ShareIcon className={classes.iconsvg} />
            </IconButton>
          </div>
        </div>
        <div className={classes.bottom}>
          <div>
            <IconButton type="user" className={classes.icon} aria-label="user">
              <AccountCircleIcon className={classes.iconsvg} />
            </IconButton>
            {user}
          </div>
        </div>
      </CardActions>
    </Card>
  );
};

export default RecipeCard;
