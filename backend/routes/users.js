var router = require('express').Router();
var usersController = require('../controllers/users');

router.post('/login',async(req, res) => {
    const user = req.body;
    const result = await usersController.login(user.email, user.password)
    res.redirect('/createRecipes.html?authorization='+result);
})

router.post('/signin',async(req, res) => {
    const user = req.body;
    console.log(user)
    const result =  await usersController.createUser(user);
    res.redirect('/createRecipes.html?authorization='+result);
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