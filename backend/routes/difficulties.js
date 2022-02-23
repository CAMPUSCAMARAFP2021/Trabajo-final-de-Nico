var router = require('express').Router();
var difficultiesController = require('../controllers/difficulties');


router.post('/',async(req, res) => {
    const {difficulty} = req.body;
    const result =  await difficultiesController.createDifficulty(difficulty);
    res.json(result);
});

router.get('/', async(req, res) => {
    const difficulties = await difficultiesController.getDifficulties();
    res.json(difficulties);
})

router.get('/:difficultyId', async(req, res) => {
    const {difficultyId} = req.params;
    const difficulty = await difficultiesController.getDifficulty(difficultyId);
    res.json(difficulty);
})

router.delete('/:difficultyId', async(req,res) => {
    const {difficultyId} = req.params;
    const result = await difficultiesController.deleteDifficulty(difficultyId);
    res.json(result);
});

module.exports = router;