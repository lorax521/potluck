import React, { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

import "../../App.css";

const useStyles = makeStyles({
  container: {
    padding: "1rem 4rem",
    display: "flex",
    position: "relative",
    flexDirection: "column",
  },
  recipes: {
    margin: "auto",
    display: "flex",
    flexFlow: "row wrap",
    position: "relative",
    justifyContent: "center",
  },
});

const Search = () => {
  let [recipes, setRecipes] = useState([]);

  const initRecipes = () => {
    axios.get("api/recipes").then((res) => {
      const data = res.data.recipes;
      const newRecipes = [];
      data.forEach((recipe) => {
        newRecipes.push(
          <RecipeCard
            id={recipe._id}
            title={recipe.title}
            user={recipe.username}
            image={recipe.image}
            likes={recipe.likes.length}
          />
        );
      });
      setRecipes([...recipes, newRecipes]);
    });
  };

  useEffect(() => {
    initRecipes();
  }, []);

  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.recipes}>{recipes}</div>
    </div>
  );
};

export default Search;
