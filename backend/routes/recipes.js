var router = express.Router();
var recipesController = require('../controllers/recipes');


router.post('/',async(req, res) => {
    const {recipe} = req.body;
    const result =  await recipesController.createRecipe(recipe);
    res.json(result);
});

router.get('/', async(req, res) => {
    const recipes = await recipesController.getRecipes();
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