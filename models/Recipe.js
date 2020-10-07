const mongoose = require('mongoose');

const RecipeSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId, // MongoDB id type
    ref: 'users', // collection we are referring to
  },
  title: {
    type: String,
    required: true,
  },
  ingredients: {
    type: String,
    required: true,
  },
  preparation: {
    type: String,
    required: true,
  },
  mainImage: {
    type: String,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId, // MongoDB id type
    ref: 'categories', // collection we are referring to
  },
});

module.exports = mongoose.model('recipe', RecipeSchema);
