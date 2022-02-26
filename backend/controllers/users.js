const User = require('../models/User');
const jwt = require('jsonwebtoken');

const addRecipeToUser = async(recipe, user)=>{
    return await User.findByIdAndUpdate(user._id,{
        $push:{recipes:recipe._id}
    })
}

const buildJWT=(user)=>{
    const time= Date.now();

    return jwt.sign({
        time,
        user
    },'plastico');
}

const login = async(email,password) =>{
    const validuser= await User.findOne({email});
    if(!validuser)throw new Error("Usuario no encontrado");
    if(password == validuser.password){
        return buildJWT(validuser);
    } else {
        throw new Error("Contraseña no valida");
    }
}

const createUser = async(user) => {
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
    login,
    addRecipeToUser,
};
