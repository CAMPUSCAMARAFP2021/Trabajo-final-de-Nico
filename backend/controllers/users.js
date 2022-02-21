const User = require('../models/User');
const jwt = require('jsonwebtoken');

a
const encriptarPassword = (pass) => {
    return pass;
}

const buildJWT = (author) => {
    const time = 1212;
    
    return jwt.sign({
        time,
        author
    }, 'secreto');
} 


const login = async (name,password) => {
    const author = await Author.findOne({name});
    // if(!author) throw new Error('usuario no encontrado');
    // console.log('=============>', author)
    // const passwordEncriptada = encriptarPassword(password);
    return buildJWT(author);
    // if (passwordEncriptada == author.password) return buildJWT(author);
    // else throw new Error('la passord es incorrecta');
}

const createAuthor = async(author) => {

    author.password = encriptarPassword('hola mundo');
    return await Author.create(author);
}

const getAuthors = async() => {
    return await Author.find();
}

const getAuthor = async(authorId) => {
    return await Author.findById(authorId);
}

const deleteAuthor = async(authorId)=> {
    const task = await Task.findByIdAndDelete(authorId);
    return false;
}

module.exports = {
    login,
    createAuthor,
    getAuthors,
    getAuthor,
    deleteAuthor,
};
