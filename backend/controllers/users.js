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

const login = async(username,password) =>{
    const validuser= await User.findOne({username});
    if(!validuser)throw new Error("Usuario no encontrado");
    if(password == validuser.password){
        return buildJWT(validuser);
    } else {
        throw new Error("Contraseña no valida");
    }
}

const createUser = async(user) => {
   
    const{username}=user
    const controllUser=await User.find({username})
        if(controllUser=="") {
            const newUser= await User.create(user);
            return buildJWT(newUser)}
        else {
            throw  new Error("El usuario ya existe")
    }
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
