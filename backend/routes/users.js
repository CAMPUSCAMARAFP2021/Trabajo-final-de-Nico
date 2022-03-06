var router = require('express').Router();
var usersController = require('../controllers/users');

router.post('/login',async(req, res) => {
    const{username,password} = req.body
    const result = await usersController.login(username, password)
    res.json(result);
})

router.post('/signin',async(req, res) => {
    const user = req.body;
    console.log(user)
    const result =  await usersController.createUser(user);
    res.json(result);
});

router.get('/', async(req, res) => {
    const users = await usersController.getUsers();
    res.json(users);
})

router.get('/:userId', async(req, res) => {
    const {userId} = req.params;
    const user = await usersController.getUser(userId);
    res.json(user);
})

router.delete('/:userId', async(req,res) => {
    const {userId} = req.params;
    const result = await usersController.deleteUser(userId);
    res.json(result);
});

module.exports = router;