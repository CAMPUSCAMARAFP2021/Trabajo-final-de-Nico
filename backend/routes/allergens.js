var router = express.Router();
var allergensController = require('../controllers/allergens');


router.post('/',async(req, res) => {
    const {allergen} = req.body;
    const result =  await allergensController.createAllergen(allergen);
    res.json(result);
});

router.get('/', async(req, res) => {
    const allergens = await allergensController.getAllergens();
    res.json(allergens);
})

router.get('/:allergenId', async(req, res) => {
    const {allergenId} = req.params;
    const allergen = await allergensController.getAllergen(allergenId);
    res.json(allergen);
})

router.delete('/:allergenId', async(req,res) => {
    const {allergenId} = req.params;
    const result = await allergensController.deleteAllergen(allergenId);
    res.json(result);
});

module.exports = router;