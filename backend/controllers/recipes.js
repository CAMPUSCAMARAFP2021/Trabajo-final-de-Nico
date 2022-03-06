const Difficulty = require('../models/Difficulty');
const Recipe = require('../models/Recipe');
const userController = require('./users')

const createRecipe = async(recipe,user) => {
    const newRecipe = await Recipe.create(recipe);
    const addRecipeToUser = await userController.addRecipeToUser(newRecipe,user);
    return newRecipe;
}

const getRecipes = async({user}) => {
    return await Recipe.find({user});
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
