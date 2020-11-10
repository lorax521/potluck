import React, { Fragment, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import Servings from "./Servings";
import Category from "./Category";
import { connect } from "react-redux";
import {
  addCategory,
  removeCategory,
  editCategory,
  addIngredient,
  editIngredientQty,
  editIngredientIngredient,
} from "../../../actions/ingredients";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  sectionHeader: {
    display: "flex",
    borderBottom: "2px solid #e9e9e9",
  },
  sectionTitle: {
    color: "#757575",
    marginRight: "2em",
  },
  category: {
    display: "flex",
    listStyle: "none",
    padding: 0,
  },
  ingredientsList: {
    display: "flex",
    flexDirection: "column",
  },
  ingredientCategories: {
    display: "flex",
  },
  ingredientCategory: {
    marginRight: "2rem",
  },
  ingredients: {
    listStyle: "none",
    padding: 0,
    maringTop: "1rem",
  },
  categoryHeader: {
    display: "flex",
    marginBottom: "1rem",
  },
  categoryTitle: {
    fontWeight: "bold",
  },
  addCategory: {
    alignSelf: "end",
  },
  addIngredientField: {
    width: "13em",
  },
  addIngredient: {
    margin: "1rem 0 0 0",
  },
  qty: {
    width: "3rem",
  },
  ingredient: {
    width: "9rem",
  },
  icon: {
    "&:hover": {
      "& $iconDelete": {
        color: "#ff0000",
      },
    },
  },
  iconDelete: {
    color: "#d3d3d3",
    pointerEvents: "none",
  },
});

const Ingredients = ({
  editable,
  editableIngredients,
  ingredients,
  addCategory,
  editCategory,
  editIngredientQty,
  editIngredientIngredient,
}) => {
  const classes = useStyles();
  const inputRef = React.useRef();

  useEffect(() => {
    if (editable) {
      ingredients = editableIngredients;
      ingredients.map((category, index) => {
        addCategory(category.category, index);
        category.ingredients.map((ingredient, idx) => {
          addIngredient(ingredient.qty, ingredient.ingredient, index);
        });
      });
    }
  }, []);

  const add = (e) => {
    const category = e.target.closest("div").querySelectorAll("input")[0];
    const index = ingredients.length;
    addCategory(category.value, index);
    category.value = "";
    setTimeout(() => {
      inputRef.current.focus();
    }, 100);
  };

  const keyDown = (e) => {
    if (e.key === "Enter") {
      add(e);
    }
  };

  const AddCategory = () => {
    return (
      <div className={classes.addCategory}>
        <TextField
          inputRef={inputRef}
          label="Add Ingredient Category"
          variant="outlined"
          size="small"
          onKeyDown={(e) => keyDown(e)}
          className={classes.addIngredientField}
        />
        <IconButton
          type="add"
          className={classes.icon}
          aria-label="add"
          onClick={(e) => add(e)}
        >
          <AddCircleOutlineIcon className={classes.iconsvg} />
        </IconButton>
      </div>
    );
  };

  // -------------
  // Ingredient
  // -------------

  // -------------
  // Category
  // -------------

  return (
    <Fragment>
      <Servings />
      <div className={classes.sectionHeader}>
        <h3 className={classes.sectionTitle}>Ingredients</h3>
        <AddCategory />
      </div>
      <ul className={classes.category}>
        {ingredients.map((item, index) => {
          return (
            <li className={classes.category} key={index}>
              <Category
                ingredients={ingredients}
                category={item.category}
                index={index}
                editable={editable}
              />
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
};

Ingredients.propTypes = {
  addCategory: PropTypes.func.isRequired,
  removeCategory: PropTypes.func.isRequired,
  addIngredient: PropTypes.func.isRequired,
  ingredients: PropTypes.object.isRequired,
  editableIngredients: PropTypes.object.isRequired,
  editCategory: PropTypes.func.isRequired,
  editIngredientQty: PropTypes.func.isRequired,
  editIngredientIngredient: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  ingredients: state.ingredients,
  editableIngredients: state.getrecipe.ingredients,
});

export default connect(mapStateToProps, {
  addCategory,
  removeCategory,
  editCategory,
  addIngredient,
  editIngredientQty,
  editIngredientIngredient,
})(Ingredients);
