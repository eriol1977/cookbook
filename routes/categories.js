const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const auth = require('../middleware/auth');

const Category = require('../models/Category');

// @route   GET api/categories
// @desc    Get all categories
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/categories/:id
// @desc    Get specific category
// @access  Private
router.get('/:id', auth, async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    res.json(category);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
