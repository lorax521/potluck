import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import { testingredients } from "./testdata";

const ingredients = testingredients;
// const columns = ingredients.length();

const useStyles = makeStyles({
  servings: {
    display: "flex",
    alignItems: "center",
    margin: "2rem 0"
  },
  sectionTitle: {
    color: "#757575",
    paddingBottom: "1rem",
    borderBottom: "1px solid #757575"
  },
  category: {
    margin: 0
  },
  ingredients: {},
  ingredientColumn: {
    margin: "0 1rem"
  },
  ingredientsList: {
    display: "flex"
  }
});

const Ingredients = () => {
  const classes = useStyles();

  const ingredientsComponents = [];
  for (const category in ingredients) {
    const categoryComponents = [];
    categoryComponents.push(<h4 className={classes.category}>{category}</h4>);
    const section = ingredients[category];
    for (const ingredient in section) {
      const qty = section[ingredient].qty;
      const name = section[ingredient].name;
      const item = qty + " " + name;
      categoryComponents.push(<p className={classes.item}>{item}</p>);
    }
    ingredientsComponents.push(
      <div className={classes.ingredientColumn}>{categoryComponents}</div>
    );
  }
  return (
    <Fragment>
      <div className={classes.servings}>
        <TextField
          label="Servings"
          id="outlined-size-normal"
          defaultValue="4"
          variant="outlined"
        />
        <IconButton className={classes.iconServing} aria-label="minus">
          <RemoveCircleIcon className={classes.iconsvg} />
        </IconButton>
        <IconButton className={classes.iconServing} aria-label="minus">
          <AddCircleIcon className={classes.iconsvg} />
        </IconButton>
      </div>
      <div className={classes.ingredients}>
        <h3 className={classes.sectionTitle}>Ingredients</h3>
        <div className={classes.ingredientsList}>{ingredientsComponents}</div>
      </div>
    </Fragment>
  );
};

export default Ingredients;
