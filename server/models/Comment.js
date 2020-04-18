const mongoose = require("mongoose");
Schema = mongoose.Schema;

const CommentSchema = new Schema({
  recipe: {
    type: Schema.Types.ObjectId,
    ref: "recipe",
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  username: {
    type: String,
  },
  comment: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("comment", CommentSchema);
