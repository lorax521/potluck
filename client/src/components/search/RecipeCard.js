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
import { getRecipe } from "../../actions/getrecipe";
import { connect } from "react-redux";

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

const RecipeCard = (props) => {
  {
    /*
  Required props: 
    id: String -- recipe id
    title: String -- card title
    image: String -- link to image
    user: String -- user name
    likes: Number -- length of the likes array
  */
  }

  const classes = useStyles();

  // <Link to="/recipe">
  //   <CardMedia
  //     className={classes.cardMedia}
  //     image={`/images/recipes/${props.image}`}
  //     title={props.title}
  //   />
  // </Link>

  const onClick = () => {
    console.log(props.id);
    props.getRecipe(props.id);
  };

  return (
    <Card className={classes.card} elevation={3}>
      <CardActionArea onClick={onClick}>
        <CardMedia
          className={classes.cardMedia}
          image={`/images/recipes/${props.image}`}
          title={props.title}
        />
        <CardContent className={classes.cardTitle}>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <div className={classes.top}>
          <div className={classes.actionContent}>
            <p className={classes.actionContentLikes}>{props.likes}</p>
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
            {props.user}
          </div>
        </div>
      </CardActions>
    </Card>
  );
};

export default connect(null, { getRecipe })(RecipeCard);
