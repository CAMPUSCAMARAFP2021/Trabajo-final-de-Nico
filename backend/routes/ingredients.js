var router = express.Router();
var ingredientsController = require('../controllers/ingredients');


router.post('/',async(req, res) => {
    const {ingredient} = req.body;
    const result =  await ingredientsController.createIngredient(ingredient);
    res.json(result);
});

router.get('/', async(req, res) => {
    const ingredients = await ingredientsController.getIngredients();
    res.json(ingredients);
})

router.get('/:ingredientId', async(req, res) => {
    const {ingredientId} = req.params;
    const ingredient = await ingredientsController.getIngredient(ingredientId);
    res.json(ingredient);
})

router.delete('/:ingredientId', async(req,res) => {
    const {ingredientId} = req.params;
    const result = await ingredientsController.deleteIngredient(ingredientId);
    res.json(result);
});

module.exports = router;