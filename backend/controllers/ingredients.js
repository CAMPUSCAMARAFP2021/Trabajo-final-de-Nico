const Ingredient = require('../models/Ingredient');


const createIngredient = async(ingredient) => {
    return await Ingredient.create(ingredient);
}

const getIngredients = async() => {
    return await Ingredient.find();
}

const getIngredient = async(ingredientId) => {
    return await Ingredient.findById(ingredientId);
}

const deleteIngredient = async(ingredientId)=> {
    return await Ingredient.findByIdAndDelete(ingredientId);
}

module.exports = {
    createIngredient,
    getIngredients,
    getIngredient,
    deleteIngredient,
};