import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Ingredient from "./Ingredient";
import { connect } from "react-redux";
import {
  editCategory,
  removeCategory,
  addIngredient,
} from "../../../actions/ingredients";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  category: {
    margin: 0,
  },
  //   ingredient: { display: "flex" },
  ingredientColumn: {
    // margin: "0 1rem"
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
  addIngredient: {
    margin: "1rem 0 0 0",
  },
  qty: {
    width: "3rem",
    "& .MuiOutlinedInput-notchedOutline": {
      borderRadius: "5px 0 0 5px",
    },
  },
  ingredient: {
    width: "9rem",
    "& .MuiOutlinedInput-notchedOutline": {
      borderRadius: "0 5px 5px 0",
    },
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

const Category = ({
  ingredients,
  category,
  index,
  editCategory,
  removeCategory,
  addIngredient,
}) => {
  const classes = useStyles();
  const inputRef = React.useRef();

  const add = (e) => {
    const fieldQty = e.target.closest("li").querySelectorAll("input")[0];
    const fieldIngredient = e.target.closest("li").querySelectorAll("input")[1];
    addIngredient(fieldQty.value, fieldIngredient.value, index);
    fieldQty.value = "";
    fieldIngredient.value = "";
    setTimeout(() => {
      inputRef.current.focus();
    }, 100);
  };

  const keyDown = (e) => {
    if (e.key === "Enter") {
      add(e);
    }
  };

  const AddIngredient = () => {
    return (
      <li className={classes.addIngredient}>
        <TextField
          label="Qty"
          variant="outlined"
          size="small"
          onKeyDown={(e) => keyDown(e)}
          className={classes.qty}
          inputRef={inputRef}
        />
        <TextField
          label="Add Ingredient"
          variant="outlined"
          size="small"
          onKeyDown={(e) => keyDown(e)}
          className={classes.ingredient}
        />
        <IconButton
          type="add"
          className={classes.icon}
          aria-label="add"
          onClick={(e) => add(e)}
        >
          <AddCircleOutlineIcon className={classes.iconsvg} />
        </IconButton>
      </li>
    );
  };

  return (
    <li className={classes.ingredientCategory}>
      <div className={classes.categoryHeader}>
        <TextField
          size="small"
          label="Ingredient Category"
          value={category}
          InputProps={{
            classes: {
              input: classes.categoryTitle,
            },
          }}
          onChange={(e) => editCategory(e.target.value, index)}
        />
        <IconButton
          type="remove"
          className={classes.icon}
          aria-label="remove"
          onClick={() => removeCategory(index)}
        >
          <DeleteIcon className={classes.iconDelete} />
        </IconButton>
      </div>
      <div>
        <ol className={classes.ingredients}>
          {ingredients[index].ingredients.map((ingredient, subindex) => {
            return (
              <li>
                <Ingredient
                  qty={ingredient.qty}
                  ingredient={ingredient.ingredient}
                  categoryIndex={index}
                  ingredientIndex={subindex}
                  ingredient={ingredient.ingredient}
                />
              </li>
            );
          })}
          <AddIngredient />
        </ol>
      </div>
    </li>
  );
};

Category.propTypes = {
  editCategory: PropTypes.func.isRequired,
  removeCategory: PropTypes.func.isRequired,
  addIngredient: PropTypes.func.isRequired,
  ingredients: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  ingredients: state.ingredients,
});

export default connect(mapStateToProps, {
  editCategory,
  removeCategory,
  addIngredient,
})(Category);
