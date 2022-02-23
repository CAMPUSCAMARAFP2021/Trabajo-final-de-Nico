const User = require('../models/User');


const createUser = async(user) => {
    user.password = encriptarPassword('hola mundo');
    return await User.create(user);
}

const getUsers = async() => {
    return await User.find();
}

const getUser = async(userId) => {
    return await User.findById(userId);
}

const deleteUser = async(userId)=> {
    return await Task.findByIdAndDelete(userId);
}

module.exports = {
    createUser,
    getUsers,
    getUser,
    deleteUser,
};
