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
      body('title', 'Title is required').not().isEmpty(),
      body('ingredients', 'Ingredients are required').not().isEmpty(),
      body('preparation', 'Preparation is required').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    // executes the express-validator checks
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { title, ingredients, preparation } = req.body;

    try {
      const newRecipe = new Recipe({
        title,
        ingredients,
        preparation,
        user: req.user.id,
      });

      const recipe = await newRecipe.save();
      res.json(recipe);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;