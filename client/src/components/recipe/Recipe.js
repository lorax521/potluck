import React, { useEffect } from "react";
import RecipeHeader from "./RecipeHeader";
import RecipeProfile from "./RecipeProfile";
import Ingredients from "./Ingredients";
import Steps from "./Steps";
import Comments from "./Comments";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getRecipe } from "../../actions/getrecipe";

const useStyles = makeStyles({
  container: {
    padding: "1rem 5rem",
    margin: "auto",
    maxWidth: "70rem",
  },
});

const Recipe = ({ recipe, getRecipe }) => {
  const recipeId = window.location.href.split("/")[
    window.location.href.split("/").length - 1
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
    getRecipe(recipeId);
  }, []);
  const classes = useStyles();

  const {
    username,
    likes,
    title,
    tags,
    description,
    servings,
    ingredients,
    steps,
    image,
  } = recipe;

  return (
    <div className={classes.container}>
      <RecipeHeader username={username} />
      <RecipeProfile
        title={title}
        description={description}
        tags={tags}
        image={image}
        likes={likes}
      />
      <Ingredients servings={servings} ingredients={ingredients} />
      <Steps steps={steps} />
      <Comments id={recipeId} username={username} />
    </div>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.object.isRequired,
  getRecipe: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  recipe: state.getrecipe,
});

export default connect(mapStateToProps, { getRecipe })(Recipe);
