const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// https://stackoverflow.com/questions/29780733/store-an-image-in-mongodb-using-node-js-express-and-mongoose
const RecipeSchema = new Schema({
  user: {
    type: String,
    required: true,
  },
  // image: {
  //   data: Buffer,
  //   contentType: String,
  // },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  ingredients: [{ type: Object, required: true }],
  steps: [
    {
      type: String,
      required: true,
    },
  ],
  likes: [
    {
      type: String,
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
  tags: [{ type: String }],
});

module.exports = Recipe = mongoose.model("recipe", RecipeSchema);
