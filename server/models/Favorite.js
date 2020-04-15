const mongoose = require("mongoose");
Schema = mongoose.Schema;

const FavoriteSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user"
  },
  favorites: [
    {
      type: Schema.Types.ObjectId,
      ref: "recipe"
    }
  ]
});

module.exports = mongoose.model("favorite", FavoriteSchema);
