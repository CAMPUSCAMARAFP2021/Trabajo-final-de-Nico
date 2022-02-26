const Allergen = require('../models/Allergen');


const createAllergen = async(allergen) => {
    return await Allergen.create(allergen);
}

const getAllergens = async() => {
    return await Allergen.find();
}

const getAllergen = async(allergenId) => {
    return await Allergen.findById(allergenId);
}

const deleteAllergen = async(allergenId)=> {
    return await Allergen.findByIdAndDelete(allergenId);
}

module.exports = {
    createAllergen,
    getAllergens,
    getAllergen,
    deleteAllergen,
};