const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const Ingredient = new Schema({
//   qty: {
//     type: Number,
//   },
//   ingredient: {
//     type: String,
//   },
// });

// const IngredientCategory = new Schema({
//   category: [{ type: Ingredient }],
// });

const RecipeSchema = new Schema({
  user: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  ingredients: [
    {
      type: Object,
    },
  ],
  steps: [
    {
      type: String,
      required: true,
    },
  ],
  likes: [
    {
      type: String,
      default: [],
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
  tags: [{ type: String }],
});

module.exports = Recipe = mongoose.model("recipe", RecipeSchema);
