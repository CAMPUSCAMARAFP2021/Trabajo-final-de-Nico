const Cookware = require('../models/Cookware');


const createCookware = async(cookware) => {
    return await Cookware.create(cookware);
}

const getCookwares = async() => {
    return await Cookware.find();
}

const getCookware = async(cookwareId) => {
    return await Cookware.findById(cookwareId);
}

const deleteCookware = async(cookwareId)=> {
    return await Cookware.findByIdAndDelete(cookwareId);
}

module.exports = {
    createCookware,
    getCookwares,
    getCookware,
    deleteCookware,
};