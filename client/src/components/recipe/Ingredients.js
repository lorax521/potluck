import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import { testingredients } from "./testdata";

const ingredients = testingredients;
// const columns = ingredients.length();

const useStyles = makeStyles((theme) => ({
  servings: {
    display: "flex",
    alignItems: "center",
    margin: "2rem 0",
  },
  root: {
    marginBottom: "2em",
  },
  sectionTitle: {
    color: "#6f732f",
    textTransform: "uppercase",
    paddingBottom: "1rem",
    borderBottom: "2px solid #e9e9e9",
  },
  category: {
    marginRight: "2.5em",
    [theme.breakpoints.down("sm")]: {
      margin: "0 0.5em 1em 0",
    },
  },
  categoryTitle: {
    color: "#a1a1a1",
    textTransform: "uppercase",
    margin: "0 0.5em -1.66em 0.5em",
    background: "#fff",
    display: "table",
    position: "relative",
    padding: "0 0.5em",
  },
  ingredientsList: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      width: "auto",
    },
  },
  ingredients: {
    padding: "1.5em 0em 0em 1em",
    display: "grid",
    gridAutoFlow: "column",
    gridTemplateRows: "repeat(6, auto)",
    border: "2px solid #e9e9e9",
    borderRadius: "5px",
    marginBottom: 0,
  },
  ingredient: {
    listStyle: "none",
    margin: "0 1.5em 1em 0",
  },
}));

const Ingredients = ({ servings, ingredients }) => {
  const classes = useStyles();

  const IngredientsComponent = ({ ingredients }) => {
    return (
      <Fragment>
        {ingredients
          ? ingredients.map((obj) => {
              return (
                <div className={classes.category}>
                  <div className={classes.categoryTitle}>{obj.category}</div>
                  <ul className={classes.ingredients}>
                    {obj.ingredients.map((ingredient) => (
                      <li
                        className={classes.ingredient}
                      >{`${ingredient.qty} ${ingredient.ingredient}`}</li>
                    ))}
                  </ul>
                </div>
              );
            })
          : " "}
      </Fragment>
    );
  };

  const Servings = () => {
    return (
      <div className={classes.servings}>
        <TextField
          label="Servings"
          id="outlined-size-normal"
          defaultValue={servings ? servings : " "}
          contentEditable={true}
          variant="outlined"
          size="small"
        />
        <IconButton className={classes.iconServing} aria-label="minus">
          <RemoveCircleIcon className={classes.iconsvg} />
        </IconButton>
        <IconButton className={classes.iconServing} aria-label="minus">
          <AddCircleIcon className={classes.iconsvg} />
        </IconButton>
      </div>
    );
  };

  return (
    <Fragment>
      <Servings />
      <div className={classes.root}>
        <h3 className={classes.sectionTitle}>Ingredients</h3>
        <div className={classes.ingredientsList}>
          <IngredientsComponent ingredients={ingredients} />
        </div>
      </div>
    </Fragment>
  );
};

// {props.ingredients.map((obj) => {
//   return <h4>{obj.category}</h4>;
// })}
export default Ingredients;
