var router = require('express').Router();
var recipesController = require('../controllers/recipes');

router.post('/',async(req, res) => {
    const {recipe} = req.body;
    recipe.user = req.user;
    const result =  await recipesController.createRecipe(recipe,req.user);
    res.json(result);
});

router.get('/', async(req, res) => {
    
    const recipes = await recipesController.getRecipes(req);
    res.json(recipes);
})

router.get('/:recipeId', async(req, res) => {
    const {recipeId} = req.params;
    const recipe = await recipesController.getRecipes(recipeId);
    res.json(recipe);
})

router.delete('/:recipeId', async(req,res) => {
    const {recipeId} = req.params;
    const result = await recipesController.deleteRecipe(recipeId);
    res.json(result);
});

module.exports = router;