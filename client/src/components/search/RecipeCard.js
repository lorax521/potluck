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

const useStyles = makeStyles((theme) => ({
  card: {
    width: 300,
    margin: "1rem",
    [theme.breakpoints.down("sm")]: {
      height: "auto",
      width: "10em",
    },
  },
  cardMedia: {
    height: 300,
    [theme.breakpoints.down("sm")]: {
      height: "12em",
    },
  },
  cardTitleContainer: {
    // position: "absolute",
    // bottom: "-17px",
    color: "#000",
    margin: 0,
    padding: 0,
    overflow: "hidden",
    whiteSpace: "nowrap",
    // borderBottom: "1px solid #e9e9e9",
    // textShadow: "1px 1px 2px #ff0000",
    "& .MuiTypography-h5": {
      [theme.breakpoints.down("sm")]: {
        fontSize: "0.9em",
        // background: "#607b7d",
      },
    },
  },
  cardTitle: {
    margin: "0.1em 0 0 1em",
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
  iconsvg: {
    fontSize: "1em",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.7em",
    },
  },
  top: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      // margin: "-0.5em 0",
      // padding: 0,
    },
  },
  bottom: {
    display: "flex",
    justifyContent: "space-between",
    margin: "0 !important",
    [theme.breakpoints.down("sm")]: {
      // margin: "-0.7em 0",
      // padding: 0,,
    },
    "& .MuiCardActions-spacing > :not(:first-child)": {
      margin: 0,
    },
  },
  actionContent: {
    display: "flex",
    alignItems: "center",
    userSelect: "none",
  },
  actionContentLikes: {
    "&:first-child": {
      margin: "0 0 0 1em",
      fontWeight: "bold",
      [theme.breakpoints.down("sm")]: {
        fontSize: "0.9em",
        // marginLeft: "0.5em",
      },
    },
    "&:last-child": {
      margin: "0 0 0 0.5rem",
      textShadow: "2px 2px #ff0000",
      color: "#ff0000",
      [theme.breakpoints.down("sm")]: {
        fontSize: "1em",
      },
    },
  },
  user: {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textAlign: "center",
  },
  username: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8em",
    },
  },
}));

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
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <CardContent className={classes.cardTitleContainer}>
          <Typography
            className={classes.cardTitle}
            gutterBottom
            variant="h5"
            component="h2"
          >
            {title}
          </Typography>
        </CardContent>
        <div className={classes.top}>
          {/*
          <div className={classes.actionContent}>
            <p className={classes.actionContentLikes}>{likes}</p>
            <FavoriteBorderIcon className={classes.actionContentLikes} />
          </div>
        */}
        </div>
        <div className={classes.bottom}>
          <div className={classes.user}>
            <IconButton type="user" className={classes.icon} aria-label="user">
              <AccountCircleIcon className={classes.iconsvg} />
            </IconButton>
            <span className={classes.username}>{user}</span>
          </div>
          <div className={classes.actionContent}>
            <p className={classes.actionContentLikes}>{likes}</p>
            <IconButton
              type="favoite"
              className={classes.iconFavorite}
              aria-label="favorite"
            >
              <FavoriteIcon className={classes.iconsvg} />
            </IconButton>
            {/*
          <IconButton
            type="share"
            className={classes.icon}
            aria-label="share"
          >
            <ShareIcon className={classes.iconsvg} />
          </IconButton>
          */}
          </div>
        </div>
      </CardActions>
    </Card>
  );
};

export default RecipeCard;
