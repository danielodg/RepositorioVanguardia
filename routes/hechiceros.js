const hechiceroCtr = require('../controller/hechiceros');
const router = require('express').Router();

router.get('/', hechiceroCtr.getAllHechiceros);
router.post('/', hechiceroCtr.addHechicero);
router.put('/:id', hechiceroCtr.UpdateHechicero);
router.put('/desactivar', hechiceroCtr.DesactivarHechicero);
router.get('/:id', hechiceroCtr.getHechicero);



module.exports = router;