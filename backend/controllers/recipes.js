const Recipe = require('../models/Recipe');
const jwt = require('jsonwebtoken');


const createRecipe = async(recipe) => {
    return await Recipe.create(recipe);
}

const getRecipes = async() => {
    return await Recipe.find();
}

const getRecipe = async(recipeId) => {
    return await Recipe.findById(recipeId);
}

const deleteRecipe = async(recipeId)=> {
    return await Recipe.findByIdAndDelete(recipeId);
}

module.exports = {
    createRecipe,
    getRecipes,
    getRecipe,
    deleteRecipe,
};
