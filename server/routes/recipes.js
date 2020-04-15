var express = require("express");
var router = express.Router();
const { check, validationResult } = require("express-validator");
const Recipe = require("../models/Recipe");
const Comment = require("../models/Comment");
const auth = require("../middleware/auth");
const multer = require("multer");
var uuid = require("uuid");
// const path = require("path");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images/recipes/");
  },
  filename: function (req, file, cb) {
    const fileExtension = file.originalname.split(".")[
      file.originalname.split(".").length - 1
    ];
    cb(null, `${uuid.v4()}.${fileExtension}`);
  },
});

var upload = multer({ storage: storage });

// var upload = multer({ dest: "public/images/recipes/" });

// @route           GET api/recipes
// @description     Get all recipes
// @access          Public
router.get("/", async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json({ recipes });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

// @route           GET api/recipes/comments
// @description     Get all recipe comments
// @access          Public
router.get("/comments", async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json({ comments });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

// @route           POST api/recipes/id
// @description     Get recipe by id
// @access          Public
router.post("/id", async (req, res) => {
  try {
    const { id } = req.body.id;
    const recipe = await Recipe.findOne({ id });
    res.json({ recipe });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

// @route           POST api/recipes/comments
// @description     Get recipe comments by recipe id
// @access          Public
router.post("/comments/recipeid", async (req, res) => {
  try {
    const { id } = req.body;
    console.log(id);
    const comments = await Comment.find({ recipe: id });
    console.log(comments);
    res.json({ comments });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

// @route           POST api/recipes
// @description     Save a new recipe
// @access          Private
// [
//   check("description", "Description is required")
//     .not()
//     .isEmpty(),
//   check("steps", "Steps are required")
//     .not()
//     .isEmpty()
// ],
// router.post("/", auth, async (req, res) => {
// TODO remove image if upload unsucessful
router.post("/", upload.single("file"), async (req, res) => {
  if (req.file === undefined) {
    return res.status(400).json({ msg: "No file was found. POST failed." });
  }
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const data = JSON.parse(req.body.data);
    const { user, description, ingredients, steps, tags } = data;

    const file = req.file;

    // const recipe = req.body.data;

    // file.mv(`${__dirname}/public/recipes/${file.name}`, error => {
    //   if (error) {
    //     console.log(error);
    //     return res.status(500).send(error);
    //   }
    // });
    // const filePath = `/recipes/${file.name}`;
    //   const user = await User.findById(req.user.id).select('-password');

    // TODO Next issue, id
    const recipe = new Recipe({
      user,
      description,
      ingredients,
      steps,
      tags,
    });

    // const imageName = `${recipe.id}.${fileExtension}`;
    // recipe.image = imageName;
    // file.fieldname = imageName;
    // file.path = `public/images/recipes/${imageName}`;

    const fileExtension = file.originalname.split(".")[
      file.originalname.split(".").length - 1
    ];
    const imageName = `${file.filename}.${fileExtension}`;
    recipe.image = imageName;

    try {
      // fs.writeFile(imageName, file);
      req.send(file);
      await recipe.save();
      res.json({ msg: "Recipe saved successfully" });
    } catch (error) {
      res.json({ msg: "Invalid recipe" });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

// @route           POST api/recipes/like
// @description     Like/unlike a recipe
// @access          Private
router.post("/like", auth, async (req, res) => {
  try {
    const { id } = req.body;
    const recipe = await Recipe.findOne({ _id: id });
    userid = req.user.id;
    const index = recipe.likes.indexOf(userid);
    index === -1 ? recipe.likes.push(userid) : recipe.likes.splice(index, 1);

    await recipe.save();
    res.json({ msg: "Recipe likes updated successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

// @route           POST api/recipes/comment
// @description     Comment on a recipe
// @access          Private
router.post("/comments", auth, async (req, res) => {
  try {
    const { id, text } = req.body;
    userid = req.user.id;

    comment = new Comment({
      recipe: id,
      user: userid,
      text,
    });

    await comment.save();
    res.json({ msg: "Recipe comment posted successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

// @route           PUT api/recipes
// @description     Update a recipe
// @access          Private
router.put("/id", auth, async (req, res) => {
  try {
    const { id } = req.body;
    recipe = await Recipe.findById({ id });
    if (!recipe) {
      return res.status(404).json({ msg: "Recipe not found" });
    }
    if (req.user.id === recipe.user) {
      const {
        id,
        img,
        description,
        ingredients,
        steps,
        equipment,
        tag,
        difficulty,
      } = req.body;
      const newRecipe = {
        id,
        img,
        description,
        ingredients,
        steps,
        equipment,
        tag,
        difficulty,
      };
      for (const key in newRecipe) {
        if (key !== "user" && key !== "id" && key !== "_id" && newRecipe[key]) {
          recipe[key] = newRecipe[key];
        }
      }
      // TODO figure outthis deprecation warning
      //   res.json({ recipe });
      await recipe.save();
      res.json({ msg: "Recipe saved successfully" });
    }
    res.json({ msg: "User unauthorized" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

// @route           PUT api/recipes/comments
// @description     Update comment
// @access          Private
router.post("/comments/commentid", auth, async (req, res) => {
  try {
    const { id, text } = req.body;
    const comment = await Comment.findOne({ _id: id });
    userid = req.user.id;
    if (comment.user == userid) {
      comment.text = text;
      await comment.save();
      res.json({ msg: "Comment updated successfully" });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

// @route           DELETE api/recipes/id
// @description     Delete recipe by id
// @access          Private
router.delete("/id", auth, async (req, res) => {
  try {
    const { id } = req.body;
    const recipe = await Recipe.findById({ id });
    if (!recipe) {
      return res.status(404).json({ msg: "Recipe not found" });
    }
    if (recipe.user === req.user.id) {
      recipeid = recipe.id;
      await Recipe.findOneAndRemove({ _id: recipeid });
      res.json({ msg: "Recipe successfully deleted" });
    } else {
      res.json({ msg: "User not authorized" });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
