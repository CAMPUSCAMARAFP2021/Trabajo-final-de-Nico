const Difficulty = require('../models/Difficulty');


const createDifficulty = async(difficulty) => {
    return await Difficulty.create(difficulty);
}

const getDifficulties = async() => {
    return await Difficulty.find();
}

const getDifficulty = async(difficultyId) => {
    return await Difficulty.findById(difficultyId);
}

const deleteDifficulty = async(difficultyId)=> {
    return await Difficulty.findByIdAndDelete(difficultyId);
}

module.exports = {
    createDifficulty,
    getDifficulties,
    getDifficulty,
    deleteDifficulty
};