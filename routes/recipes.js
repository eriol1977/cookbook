const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const auth = require('../middleware/auth');

const User = require('../models/User');
const Recipe = require('../models/Recipe');

// @route   GET api/recipes
// @desc    Get all user recipes
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    // req.user was populated by the auth middleware, after verifying the token
    const recipes = await Recipe.find({ user: req.user.id });
    res.json(recipes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/recipes
// @desc    Add new recipe
// @access  Private
// use [] for multiple middlewares
router.post(
  '/',
  [
    auth,
    [
      body('title', 'Il titolo è obbligatorio').not().isEmpty(),
      body('category', 'La categoria è obbligatoria').not().isEmpty(),
      body('ingredients', 'Gli ingredienti sono obbligatori').not().isEmpty(),
      body('preparation', 'La preparazione è obbligatoria').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    // executes the express-validator checks
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { title, ingredients, preparation, mainImage, bookmarked, category } = req.body;

    try {
      const newRecipe = new Recipe({
        title,
        ingredients,
        preparation,
        user: req.user.id,
        mainImage,
        bookmarked,
        category: category,
      });

      const recipe = await newRecipe.save();
      res.json(recipe);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route   PUT api/recipes/:id
// @desc    Update recipe
// @access  Private
router.put('/:id', auth, async (req, res) => {
  const { title, ingredients, preparation, mainImage, bookmarked, category } = req.body;

  // build recipe object
  const recipeFields = {};
  if (title) recipeFields.title = title;
  if (ingredients) recipeFields.ingredients = ingredients;
  if (preparation) recipeFields.preparation = preparation;
  if (mainImage) recipeFields.mainImage = mainImage;
  if (bookmarked !== null) recipeFields.bookmarked = bookmarked;
  if (category) recipeFields.category = category;

  try {
    let recipe = await Recipe.findById(req.params.id);
    if (!recipe) return res.status(404).json({ msg: 'Recipe not found' });

    // make sure user owns recipe
    if (recipe.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    recipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      { $set: recipeFields }, // sets the recipeFields properties
      { new: true } // if the recipe isn't found, create a new one
    );

    res.json(recipe);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/recipes/:id
// @desc    Delete recipe
// @access  Private
router.delete('/:id', auth, async (req, res) => {
  try {
    let recipe = await Recipe.findById(req.params.id);
    if (!recipe) return res.status(404).json({ msg: 'Recipe not found' });

    // make sure user owns recipe
    if (recipe.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    await Recipe.findByIdAndRemove(req.params.id);

    res.json({ msg: 'Recipe removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
