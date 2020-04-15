import React, { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";
import { makeStyles } from "@material-ui/core/styles";
import ReactPaginate from "react-paginate";
import { recipes } from "./testdata";

import "../../App.css";

const useStyles = makeStyles({
  container: {
    padding: "1rem 4rem",
    display: "flex",
    position: "relative",
    flexDirection: "column"
  },
  recipes: {
    margin: "auto",
    display: "flex",
    flexFlow: "row wrap",
    position: "relative",
    justifyContent: "center"
  }
});

const numberOfRecipes = recipes.length;
const recipesPerPage = 12;
const pageCount = Math.ceil(numberOfRecipes / recipesPerPage);

const Search = () => {
  let [recipeCards, setRecipeCards] = useState([]);

  const handlePagination = pagination => {
    recipeCards = [];
    const page = pagination.selected;
    const bottom = page * recipesPerPage;
    const top = bottom + recipesPerPage;
    for (const recipe in recipes) {
      const index = parseInt(recipe);
      if (index >= bottom && index < top) {
        recipeCards.push(
          <RecipeCard
            title={recipes[recipe].title}
            user={recipes[recipe].user}
            img={recipes[recipe].img}
          />
        );
      }
    }
    setRecipeCards(recipeCards);
    window.scrollTo(0, 0);
    // window.scrollTo({top: 0, behavior: 'smooth'});
  };

  useEffect(() => {
    handlePagination({ selected: 0 });
  }, []);

  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.recipes}>{recipeCards}</div>
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePagination}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default Search;
