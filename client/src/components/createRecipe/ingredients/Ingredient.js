import React from "react";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import {
  editIngredientQty,
  editIngredientIngredient,
  removeIngredient
} from "../../../actions/ingredients";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  category: {
    margin: 0
  },
  //   ingredient: { display: "flex" },
  ingredientColumn: {
    // margin: "0 1rem"
  },
  ingredientsList: {
    display: "flex",
    flexDirection: "column"
  },
  ingredientCategories: {
    display: "flex"
  },
  ingredientCategory: {
    marginRight: "2rem"
  },
  ingredients: {
    listStyle: "none",
    padding: 0,
    maringTop: "1rem"
  },
  categoryHeader: {
    display: "flex",
    marginBottom: "1rem"
  },
  categoryTitle: {
    fontWeight: "bold"
  },
  addIngredient: {
    margin: "1rem 0 0 0"
  },
  qty: {
    width: "3rem"
  },
  ingredient: {
    width: "9rem"
  },
  icon: {
    "&:hover": {
      "& $iconDelete": {
        color: "#ff0000"
      }
    }
  },
  iconDelete: {
    color: "#d3d3d3",
    pointerEvents: "none"
  }
});

const Ingredient = ({
  qty,
  ingredient,
  categoryIndex,
  ingredientIndex,
  editIngredientQty,
  editIngredientIngredient,
  removeIngredient
}) => {
  const classes = useStyles();

  return (
    <div>
      <TextField
        label="Qty"
        size="small"
        value={qty}
        className={classes.qty}
        onChange={e =>
          editIngredientQty(e.target.value, categoryIndex, ingredientIndex)
        }
      />
      <TextField
        label="Ingredient"
        size="small"
        value={ingredient}
        className={classes.ingredient}
        onChange={e =>
          editIngredientIngredient(
            e.target.value,
            categoryIndex,
            ingredientIndex
          )
        }
      />
      <IconButton
        type="remove"
        className={classes.icon}
        aria-label="remove"
        onClick={() => removeIngredient(categoryIndex, ingredientIndex)}
      >
        <DeleteIcon className={classes.iconDelete} />
      </IconButton>
    </div>
  );
};

Ingredient.propTypes = {
  editIngredient: PropTypes.func.isRequired,
  removeIngredient: PropTypes.func.isRequired
};

export default connect(null, {
  editIngredientQty,
  editIngredientIngredient,
  removeIngredient
})(Ingredient);
