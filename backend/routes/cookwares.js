var router = require('express').Router();
var cookwaresController = require('../controllers/cookwares');


router.post('/',async(req, res) => {
    const {cookware} = req.body;
    const result =  await cookwaresController.createCookware(cookware);
    res.json(result);
});

router.get('/', async(req, res) => {
    const cookwares = await cookwaresController.getCookwares();
    res.json(cookwares);
})

router.get('/:cookwareId', async(req, res) => {
    const {cookwareId} = req.params;
    const cookware = await cookwaresController.getCookware(cookwareId);
    res.json(cookware);
})

router.delete('/:cookwareId', async(req,res) => {
    const {cookwareId} = req.params;
    const result = await cookwaresController.deleteCookware(cookwareId);
    res.json(result);
});

module.exports = router;